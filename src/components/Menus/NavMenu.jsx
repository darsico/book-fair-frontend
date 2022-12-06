import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const NavMenu = () => {
 const links = [
  {
   label: 'Sellers', children: [
    { label: 'Sign In', link: '/seller/login' },
    { label: 'Sign Up', link: '/seller/new' },
    { label: 'Initial', link: '/addresses' },
    { label: 'Payment methods', link: '/payment-methods' },
   ]
  },

  {
   label: 'Readers', children: [
    { label: 'Sing In', link: '/buyer/login' },
    { label: 'Sign Up', link: '/buyer/new' },
    { label: 'Addresses', link: '/addresses' },
    { label: 'Payment methods', link: '/payment-methods' },
   ]
  }
 ]

 return (
  <div className="">
   <Link to={"/sellers"}>Discover Stores</Link>
   {links.map(item => (<Menu as="div" className="relative inline-block text-left">
    <div>
     <Menu.Button className="inline-flex w-full justify-center  items-center  gap-2  px-4 py-2" >
      {item.label}
      <BsChevronDown />
     </Menu.Button>
    </div>
    <Transition
     as={Fragment}
     enter="transition ease-out duration-100"
     enterFrom="transform opacity-0 scale-95"
     enterTo="transform opacity-100 scale-100"
     leave="transition ease-in duration-75"
     leaveFrom="transform opacity-100 scale-100"
     leaveTo="transform opacity-0 scale-95"
    >
     <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
      <div className="px-1 py-1 ">
       {item.children.map((child) => (
        <Menu.Item>
         {({ active }) => (
          <Link to={child.link}>
           <button
            className={`${active ? 'bg-gray-900 text-white' : 'text-gray-900'
             } group flex w-full items-center  px-2 py-2 text-sm`}
           >
            {child.label}
           </button>
          </Link>
         )}
        </Menu.Item>
       ))}
      </div>
     </Menu.Items>
    </Transition>
   </Menu>))}
  </div >
 )
}

export default NavMenu
