import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavBar = ({ setIsOpen, mobile = false }) => {
 const links = [
  {
   label: 'Sellers',
   children: [
    { label: 'Sign In', link: '/seller/login' },
    { label: 'Sign Up', link: '/seller/new' },
    { label: 'Initial', link: '/seller' },
   ],
  },

  {
   label: 'Readers',
   children: [
    { label: 'Sign In', link: '/buyer/login' },
    { label: 'Sign Up', link: '/buyer/new' },
    { label: 'Initial', link: '/buyer' },
   ],
  },
 ];

 const additionalProps = {
  onClick: () => {
   if (mobile) setIsOpen(false);
  },
 };
 return (
  <>
   <Link to="/" {...additionalProps}>
    <p className=" px-4 py-2">Shop All</p>
   </Link>
   <Link to={'/sellers'} {...additionalProps}>
    <p className=" px-4 py-2">Discover Stores</p>
   </Link>
   {links.map((item, index) => (
    <Menu as="div" className="relative inline-block text-left" key={index}>
     <div>
      <Menu.Button className="inline-flex w-full justify-center  items-center  gap-2  px-4 py-2">
       {item.label}
       <BsChevronDown />
      </Menu.Button>
     </div>
     <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
      <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
       <div className="px-1 py-1 ">
        {item.children.map((child, index) => {
         return (
          <Menu.Item key={index}>
           {({ active }) => (
            <Link to={child.link} {...additionalProps}>
             <button className={`${active ? 'bg-gray-900 text-white' : 'text-gray-900'} group flex w-full items-center  px-2 py-2 text-sm`}>{child.label}</button>
            </Link>
           )}
          </Menu.Item>
         );
        })}
       </div>
      </Menu.Items>
     </Transition>
    </Menu>
   ))}
  </>
 );
};

export default NavBar;
