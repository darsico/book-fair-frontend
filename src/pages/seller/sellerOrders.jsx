import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import { getSellerData } from '../../api/sellerApi';
import SpinnerSection from '../../components/Loader/SpinnerSection';
import Orders from '../../components/Orders/Orders';

const SellerOrders = () => {

 const { sellerId } = useParams();
 const { isLoading, data } = useQuery(['orders', sellerId], () => getSellerData(sellerId));
 if (isLoading) return <SpinnerSection />;
 const { sellerOrders } = data || {};
 return (
  <section className="page-container">
   <div className="flex flex-col gap-5   mx-auto">
    <div className="sub-container">
     <div className="overflow-x-auto relative">
      <Orders orders={sellerOrders} type="seller" />
     </div>
    </div>
   </div>
  </section>
 );
};

export default SellerOrders;
