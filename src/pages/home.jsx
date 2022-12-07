import { useQuery } from "react-query";
import { getAllBooks } from "../api/buyerApi";
import Book from "../components/Book/Book";
import { useSearchParams } from "react-router-dom";
import Search from "../components/Search/Search";
import SpinnerSection from "../components/Loader/SpinnerSection";

const Home = () => {
  const { data, isLoading, isError } = useQuery("book", getAllBooks);
  const [params, setParams] = useSearchParams()

  if (isLoading) return <SpinnerSection />
  if (isError) return <h1>Something went wrong</h1>
  if (!data) return <h1>There is no data yet</h1>

  const searchTerms = params.get('title') || '';
  const { books } = data || {};

  const filteredBooks = books?.filter((book) => book.title.toLowerCase().includes(searchTerms.toLowerCase()));

  const sortedDates = filteredBooks?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  console.log(sortedDates)

  return (
    <section className="page-container">
      <div className="py-16">
        <h2 className="text-4xl font-special font-bold text-center pb-6">Welcome to BookFair</h2>
        <Search setParams={setParams} params={params} placeholder="Search any book you want" />
      </div>
      <div className="grid  grid-cols-2  md:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10">
        {
          books && filteredBooks
            .map(book => <Book key={book._id} data={book} card />)
        }
      </div>
    </section>
  );
}

export default Home;