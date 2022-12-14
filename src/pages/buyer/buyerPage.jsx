import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getBuyerData } from '../../api/buyerApi';
import UserHome from '../../components/Home/UserHome';
import Info from '../../components/Info/Info';
import SpinnerSection from '../../components/Loader/SpinnerSection';


const BuyerPage = () => {
 const user = JSON.parse(localStorage.getItem('user'));
 const { buyerId } = useParams();
 const { isLoading, data: userData } = useQuery(['buyer', buyerId], () => getBuyerData(buyerId));

 if (isLoading) return <SpinnerSection />;

 const { buyer, orders } = userData || {};

 return (
  <section className="page-container">
   <UserHome type="buyer" data={buyer} orders={orders} />
  </section>
 );
};

export default BuyerPage;
