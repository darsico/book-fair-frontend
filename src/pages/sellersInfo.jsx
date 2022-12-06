import { useQuery } from 'react-query';
import { getSellerBooksPublic } from '../api/sellerApi';
import Book from '../components/Book/Book.jsx';
import { useParams, useSearchParams } from 'react-router-dom';
import Search from '../components/Search/Search.jsx';
import Info from '../components/Info/Info';

import SpinnerSection from '../components/Loader/SpinnerSection';

const SellersInfo = () => {
 const { sellerId } = useParams();
 const { data, isLoading, error } = useQuery(['seller', sellerId], () => getSellerBooksPublic(sellerId));
 const [params, setParams] = useSearchParams();

 if (isLoading) return <SpinnerSection />;
 if (error || !data) return <h1>Something went wrong</h1>;

 const searchTerms = params.get('title') || '';

 const { books, seller } = data || {};

 const { name, email, store } = seller || {}
 const filteredBooks = books && books?.filter((book) => book.title.toLowerCase().includes(searchTerms.toLowerCase()));

 const sellerInfo = {
  name,
  email,
  isPrivate: false,
 };

 return (
  <section>
   <div className="py-16">
    <h2 className="text-4xl font-special font-bold text-start flex items-center gap-2">
     {store} {books?.length > 0 && <span className="text-gray-500 text-lg font-normal"> {books?.length} books</span>}
    </h2>
    <Info {...sellerInfo} />
    {books?.length >= 1 && (
     <>
      <h4 className="text-gray-500 pb-2">Search the {store}'s books</h4>
      <Search setParams={setParams} params={params} />
     </>
    )}
   </div>
   {books?.length >= 1 ? <div className="grid  grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10">{books && filteredBooks.map((book) => <Book key={book._id} data={book} />)}</div> : <h1 className="text-center text-2xl font-semibold">{store} doesn't have books yet.</h1>}
  </section>
 );
};

export default SellersInfo;
