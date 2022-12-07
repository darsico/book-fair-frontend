import { useQuery } from 'react-query';
import { Link, useSearchParams } from 'react-router-dom';
import { getSellers } from '../api/sellerApi';

import SpinnerSection from '../components/Loader/SpinnerSection';
import Search from '../components/Search/Search';

const Sellers = () => {
 const { data, isLoading, isError, error } = useQuery('seller', getSellers);
 const [params, setParams] = useSearchParams();
 if (isLoading) return <SpinnerSection />;
 if (isError) return <h1>{error.message}</h1>;
 if (!data) return <h1>No sellers yet</h1>;

 const { sellers } = data;

 const searchTerms = params.get('title') || '';

 const filteredSellers = sellers?.filter((seller) => seller.store.toLowerCase().includes(searchTerms?.toLowerCase()));

 return (
  <section className="page-container">
   <h3 className="text-3xl font-medium">Welcome to BookFair</h3>
   <div className="py-6">
    <Search placeholder="Search sellers" params={params} setParams={setParams} />
   </div>
   <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-10">
    {filteredSellers.map((seller) => (
     <div key={seller._id} className="p-2 border border-solid ">
      <h2 className="font-special font-bold text-base">{seller.store}</h2>
      <p className="text-sm ">
       Owner:<span className="text-gray-600"> {seller.name}</span>
      </p>
      <p className="text-sm ">Email: {seller.email}</p>
      <p>{seller.books.length >= 1 ? `${seller.books.length} books` : 'No books yet'}</p>
      <Link to={`/sellers/${seller._id}`}>
       <button className="text-lg mt-4 underline">Go to store</button>
      </Link>
     </div>
    ))}
   </div>
  </section>
 );
};

export default Sellers;
