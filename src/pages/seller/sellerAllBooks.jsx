import { Link, useParams } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { getSellerBooks } from '../../api/sellerApi';
import { useQuery } from 'react-query';
import Table from '../../components/Table/Table';
import SpinnerSection from '../../components/Loader/SpinnerSection';

const SellerAllBooks = () => {

 const { sellerId } = useParams();

 const { data: sellerBooks, isLoading, isError, error } = useQuery(['sellerBooks', sellerId], () => getSellerBooks(sellerId));

 const tableHeader = ['Image', 'Title', 'Author', 'Description', 'Price', 'Stock'];

 if (isLoading || !sellerBooks) return <SpinnerSection />
 if (isError) return <h1>{error.message}</h1>

 return (
  <section className="page-container">
   <div className="flex flex-col gap-5   mx-auto">
    <div className=" text-3xl font-special">
     <h6>| Book Store</h6>
    </div>
    <Link to={`/seller/${sellerId}/books/new`}>
     <div className="flex items-center gap-2">
      <span className="text-2xl">📖</span>
      <h3 className="text-sm underline"> Create new book</h3> <AiOutlinePlus />
     </div>
    </Link>
    <h3 className="text-lg">Check out your products</h3>
    <div className="sub-container">
     <Table headerData={tableHeader} bodyData={sellerBooks?.books || []} type="book" />
    </div>
   </div>
  </section>
 );
};

export default SellerAllBooks;
