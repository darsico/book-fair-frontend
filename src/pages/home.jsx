import { useQuery } from "react-query";
import { getAllBooks } from "../api/buyerApi";
import Book from "../components/Book/Book";
import { useSearchParams } from "react-router-dom";
import Search from "../components/Search/Search";
import SpinnerSection from "../components/Loader/SpinnerSection";

const Home = () => {
  const { data, isLoading, error } = useQuery("book", getAllBooks);
  const [params, setParams] = useSearchParams()

  if (isLoading || !data) return <SpinnerSection />
  if (error || !data) return <h1>Something went wrong</h1>

  const searchTerms = params.get('title') || '';
  const { books } = data || {};

  const filteredBooks = books?.filter((book) => book.title.toLowerCase().includes(searchTerms.toLowerCase()));

  return (
    <section className="page-container">
      <div className="py-16">
        <h2 className="text-4xl font-special font-bold text-center pb-6">Store Name</h2>
        <Search setParams={setParams} params={params} />
      </div>
      <div className="grid  grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10">
        {
          books && filteredBooks
            .map(book => <Book key={book._id} data={book} />)
        }
      </div>
    </section>
  );
}

export default Home;