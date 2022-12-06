import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { getSellerData } from '../../api/sellerApi';
import SpinnerSection from '../../components/Loader/SpinnerSection';
import Orders from '../../components/Orders/Orders';

const SellerOrders = () => {

 const { sellerId } = useParams();
 const { isLoading, data } = useQuery(['orders', sellerId], () => getSellerData(sellerId));
 console.log(data)
 if (isLoading) return <SpinnerSection />;
 const { seller } = data || {};

 return (
  <section className="page-container">
   <div className="flex flex-col gap-5   mx-auto">
    <div className=" text-3xl font-special">
     <h6>| Book Store</h6>
    </div>
    <Link to="/seller/1/books/new">
     <div className="flex items-center gap-2"></div>
    </Link>
    <h3 className="text-lg">
     <span className="text-2xl">📑</span> Check out your orders
    </h3>
    <div className="sub-container">
     <div className="overflow-x-auto relative">
      <Orders orders={seller.orders} type="seller" />
     </div>
    </div>
   </div>
  </section>
 );
};

export default SellerOrders;
