import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
 const location = useLocation();
 const navigate = useNavigate();
 const { pathname } = location;
 const path = pathname.split('/')[1];
 const isSeller = path === 'seller';
 const seller = path.toLocaleUpperCase()

 const handleLogout = () => {
  localStorage.clear();
  navigate(`/${path}/login`);
 }

 const token = localStorage.getItem('token');
 return (
  <div className="container m-auto px-4">
   <header className="py-5 flex justify-between">
    <h1 className="text-xl font-bold font-special tracking-tight">BookFair <span className="font-display font-normal">{isSeller && `| ${seller}`}</span></h1>

    <nav>
     <ul className="flex gap-4 text-gray-600 items-center justify-center">
      {token && <button className="border rounded-md px-3 py-2" onClick={handleLogout}>Logout</button>}
      <li><Link to="/seller">Sellers</Link></li>
      <li><Link to="/buyer">Buyers</Link></li>
     </ul>
    </nav>
   </header>
   <main className="min-h-screen">
    <Outlet />
   </main>
   <footer>footer</footer>
  </div>
 );
}

export default Layout;