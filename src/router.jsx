import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home';
import Layout from './pages/layout';
import { BuyerCart, BuyerInitial, BuyerLogin, BuyerPage, BuyerSignUp } from './pages/buyer';
import { SellerBookCreate, SellerAllBooks, SellerInitial, SellerLogin, SellerOrders, SellerPage, SellerSignUp } from './pages/seller';
import SellersInfo from './pages/sellersInfo';
import Sellers from './pages/sellers';
import SignRoute from './components/SIgnRoute';

const Router = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route path="/seller" element={<SellerInitial />} />
     <Route element={<SignRoute />}>
      <Route path="/seller/new" element={<SellerSignUp />} />
     </Route>
     <Route element={<SignRoute />}>
      <Route path="/seller/login" element={<SellerLogin />} />
     </Route>
     <Route element={<ProtectedRoute />}>
      <Route path="/seller/:sellerId" element={<SellerPage />} />
     </Route>
     <Route element={<ProtectedRoute />}>
      <Route path="/seller/:sellerId/books" element={<SellerAllBooks />} />
     </Route>
     <Route element={<ProtectedRoute />}>
      <Route path="/seller/:sellerId/books/new" element={<SellerBookCreate />} />
     </Route>
     <Route element={<ProtectedRoute />}>
      <Route path="seller/:sellerId/orders" element={<SellerOrders />} />
     </Route>

     <Route path="/buyer" element={<BuyerInitial />} />
     <Route element={<SignRoute />}>
      <Route path="/buyer/new" element={<BuyerSignUp />} />
     </Route>
     <Route element={<SignRoute />}>
      <Route path="/buyer/login" element={<BuyerLogin />} />
     </Route>
     <Route element={<ProtectedRoute />}>
      <Route path="/buyer/:buyerId" element={<BuyerPage />} />
     </Route>

     <Route path="/sellers" element={<Sellers />} />
     <Route path="sellers/:sellerId" element={<SellersInfo />} />
     <Route index element={<Home />} />
    </Route>
   </Routes>
  </BrowserRouter >
 );
};
export default Router;
