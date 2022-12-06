import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import CartIcon from '../components/MiniCart/CartIcon';
import MiniCart from '../components/MiniCart/MiniCart';
import NavMenu from '../components/Menus/NavMenu';
import { RiAccountCircleFill } from 'react-icons/ri';
import { useState } from 'react';
import { VscMenu } from 'react-icons/vsc';
import { AiOutlineClose } from 'react-icons/ai';

const Layout = () => {
 const [isOpen, setIsOpen] = useState(false);

 const userInfo = JSON.parse(localStorage.getItem('user')) || {};
 const location = useLocation();
 const navigate = useNavigate();
 const { pathname } = location;
 const path = pathname.split('/')[1];

 let isSeller = false;
 isSeller = userInfo?.role === 'seller';
 const seller = path === 'seller' && path.toLocaleUpperCase();
 const user = JSON.parse(localStorage.getItem('user'));

 const handleLogout = () => {
  localStorage.clear();
  navigate(`/${user.role}/login`);
 };

 const token = localStorage.getItem('token');

 return (
  <div className="container m-auto px-4">
   <header className="py-5 flex justify-between items-center">
    <h1 className="text-xl font-bold font-special tracking-tight z-50">
     BookFair <span className="font-display font-normal">{seller && `| ${seller}`}</span>
    </h1>
    <nav className="flex gap-5 items-center justify-center">
     <NavMenu isOpen={isOpen}
      setIsOpen={setIsOpen} />
     {!isSeller && <CartIcon />}
     {isOpen ? <AiOutlineClose className='z-50 md:hidden text-2xl hover:cursor-pointer' onClick={() => setIsOpen(false)} /> : <VscMenu className='md:hidden text-xl hover:cursor-pointer' onClick={() => setIsOpen(true)} />}
    </nav>
   </header>
   <main className="min-h-screen">
    {/* <button className='flex gap-2 items-center' onClick={handleReturn}><IoArrowBackOutline /> Go back</button> */}
    {userInfo.role === "seller" && <div className=" text-3xl font-special pb-6">
     <h6> {userInfo.store}</h6>
    </div>}
    {token && (
     <div className="h-8">
      <ul className="flex gap-4">
       <li className='flex items-center' >
        <Link to={`/${user?.role}/${user?.userId}`}><button className="flex gap-2 items-center"> <RiAccountCircleFill className="text-2xl" />My Account</button></Link>
       </li>
       <li>
        <button className="border text-gray-600  px-3 py-2" onClick={handleLogout}>
         Logout
        </button>
       </li>
      </ul>
     </div>
    )}
    <Outlet />
    <MiniCart />
   </main>
   <footer>footer</footer>
  </div>
 );
};

export default Layout;
