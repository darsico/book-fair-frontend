import { useLocation } from 'react-router-dom';
import UserLogin from '../../components/Login/UserLogin';


const SellerLogin = () => {
  return (
    <section className="page-container">
      <UserLogin type="seller" />
    </section>
  );
};

export default SellerLogin;
