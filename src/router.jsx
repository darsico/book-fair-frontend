import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/home';
import Layout from './pages/layout';
import { BuyerCart, BuyerInitial, BuyerLogin, BuyerPage, BuyerSignUp } from './pages/buyer';
import { SellerBookCreate, SellerAllBooks, SellerInitial, SellerLogin, SellerOrders, SellerPage, SellerSignUp } from './pages/seller';
import SellersInfo from './pages/sellersInfo';
import Sellers from './pages/sellers';

const Router = () => {
 return (
  <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout />}>
     <Route path="/seller" element={<SellerInitial />} />
     <Route path="/seller/new" element={<SellerSignUp />} />
     <Route path="/seller/login" element={<SellerLogin />} />
     <Route element={<ProtectedRoute />}>
      <Route path="/seller/:sellerId" element={<SellerPage />} />
     </Route>
     <Route path="/seller/:sellerId/books" element={<SellerAllBooks />} />
     <Route path="/seller/:sellerId/books/new" element={<SellerBookCreate />} />

     <Route path="seller/:sellerId/orders" element={<SellerOrders />} />

     <Route path="/buyer" element={<BuyerInitial />} />
     <Route path="/buyer/new" element={<BuyerSignUp />} />
     <Route path="/buyer/login" element={<BuyerLogin />} />
     <Route path="/buyer/:buyerId" element={<BuyerPage />} />
     <Route path="/buyer/:buyerId/cart" element={<BuyerCart />} />
     {/* <Route path="/buyer/:buyerId/orders" element={<BuyerOrders />} /> */}
     {/*
    <Route path="sellers/:sellerId/books" element={<SellersBooks />} /> */}
     <Route path="/sellers" element={<Sellers />} />
     <Route path="sellers/:sellerId" element={<SellersInfo />} />
     <Route index element={<Home />} />
    </Route>
   </Routes>
  </BrowserRouter>
 );
};
export default Router;
