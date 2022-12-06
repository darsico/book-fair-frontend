import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import CartIcon from "../components/MiniCart/CartIcon";
import MiniCart from "../components/MiniCart/MiniCart";
import NavMenu from "../components/Menus/NavMenu";
const Layout = () => {
 const location = useLocation();
 const navigate = useNavigate();
 const { pathname } = location;
 const path = pathname.split('/')[1];
 const isSeller = path === 'seller';
 const seller = path.toLocaleUpperCase()
 const user = JSON.parse(localStorage.getItem('user'));
 const handleLogout = () => {
  localStorage.clear();
  navigate(`/${user.role}/login`);
 }

 const token = localStorage.getItem('token');
 return (
  <div className="container m-auto px-4">
   <header className="py-5 flex justify-between">
    <h1 className="text-xl font-bold font-special tracking-tight">BookFair <span className="font-display font-normal">{isSeller && `| ${seller}`}</span></h1>

    <nav className="flex gap-5 items-center justify-center">
     {token && <button className="border rounded-md px-3 py-2" onClick={handleLogout}>Logout</button>}
     {!isSeller && <CartIcon />}
     <NavMenu />
    </nav>
   </header>
   <main className="min-h-screen">
    <Outlet />
    <MiniCart />
   </main>
   <footer>footer</footer>
  </div>
 );
}

export default Layout;