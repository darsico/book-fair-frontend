import { GrLinkNext } from 'react-icons/gr';
import { Link, useParams } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { getSellerById } from '../../api/sellerApi';
import { useQuery } from 'react-query';
import SpinnerSection from '../../components/Loader/SpinnerSection';

const SellerPage = () => {
 const { sellerId } = useParams();

 const { data, isLoading, isError, error, isFetched } = useQuery(['seller', sellerId], () => getSellerById(sellerId));

 if (isLoading) return <SpinnerSection />

 if (isError || error) return <h1>Something went wrong {error.message}</h1>;

 const { seller } = data;
 const { name, email, store, _id } = seller;
 return (
  seller && (
   <section className="page-container">
    <div className="flex flex-col md:flex-row md:justify-between gap-5 mx-auto">
     <div>
      <h2 className=" text-xl">
       Welcome to your store, <span className="text-2xl font-semibold">{name}</span>
      </h2>
      <div className="sub-container">
       <div className="py-10">
        <span className="text-3xl">👤</span>
        <h3 className="text-sm text-gray-700 font-semibold py-2">Your info:</h3>
        <h5>
         <span className="text-sm text-gray-700">Name:</span> {name}
        </h5>
        <h5>
         <span className="text-sm text-gray-700">Email:</span> {email}
        </h5>
        <h5>
         <span className="text-sm text-gray-700">Store Name:</span> {store}
        </h5>
       </div>
      </div>
     </div>

     <div className="flex flex-col gap-4">
      <div className="w-fit">
       <Link to={`/seller/${_id}/books`} className="inline-flex items-center gap-2">
        <span className="text-2xl">📚</span>
        <h3 className="text-sm underline inline"> Check out your books here</h3> <GrLinkNext className="text-sm" />
       </Link>
      </div>
      <div className=" w-fit">
       <Link to={`/seller/${_id}/orders`} className="inline-flex items-center gap-2">
        <span className="text-2xl">📑</span>
        <h3 className="text-sm underline inline"> Go to your orders </h3> <GrLinkNext className="text-sm" />
       </Link>
      </div>
      <div className=" w-fit ">
       <Link to={`/seller/${_id}/books/new`} className=" inline-flex items-center gap-2">
        <span className="text-2xl">📖</span>
        <h3 className="text-sm underline inline "> Create new book</h3> <AiOutlinePlus />
       </Link>
      </div>
     </div>
    </div>
   </section>
  )
 );
};

export default SellerPage;
