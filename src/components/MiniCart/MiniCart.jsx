import { useCartStore, useProductStore } from '../../store';
import { GrClose } from 'react-icons/gr';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import OrderButton from '../Buttons/OrderButton';
import { useState } from 'react';
import { useEffect } from 'react';
import { set } from 'react-hook-form';

const MiniCart = () => {
 const { isOpenCart, setIsOpenCart } = useProductStore((state) => state);
 const [isDisabled, setIsDisabled] = useState(false);
 const { cart, decreaseOne, increaseOne, removeCart, clearCart, getSubtotal } = useCartStore((state) => state) || [];

 const handleClearCart = () => {
  setIsOpenCart(false);
  clearCart();
 };

 const increaseOneInCart = (bookId, stock, quantity) => {
  if (quantity < stock) {
   increaseOne(bookId);
  } else {
   setIsDisabled(true);
  }
 };

 const decreaseOneInCart = (bookId) => {
  setIsDisabled(false);
  decreaseOne(bookId);
 };

 const storeName = cart[0]?.seller.store;

 return (
  <AnimatePresence>
   {isOpenCart && (
    <motion.section
     className={`z-50 fixed right-0 top-0 h-full w-screen md:w-[50%] lg:w-[40%]  bg-gray-100 box-border md:p-5 pt-5 pb-1 px-5`}
     initial={{ x: '100%', boxShadow: '0 0 0 0px' }}
     animate={{ x: 0, boxShadow: '0 0 0 3000px rgba(0, 0, 0, 0.5)' }}
     exit={{ x: '100%', boxShadow: '0 0 0 0px' }}
     transition={{ duration: 0.3 }}
    >
     <div className="absolute top-0 left-0 flex flex-wrap content-center justify-between w-full p-5 text-xl">
      <h2 className="font-medium font-special">Your cart | <span className='font-bold'>{storeName}</span></h2>
      <GrClose onClick={() => setIsOpenCart(false)} className="hover:cursor-pointer" />
     </div>
     <div className="relative mt-10 lg:mt-20 h-[50vh] overflow-auto py-8 ">
      <ul className="flex flex-col gap-2 ">
       {cart && cart.length > 0 ? (
        cart.map((item) => {
         const { bookId, title, price, quantity, image, author, seller, stock } = item;
         return (
          <motion.li key={bookId} className="grid md:grid-cols-[1fr_3fr_0.5fr] grid-cols-[1fr_2fr] bg-white p-3 rounded-md h-fit" initial={{ y: '50%', opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: '50%', opacity: 0 }} transition={{ duration: 0.6 }}>
           <figure className="w-28">
            <img src={image} alt="" className="object-cover" />
           </figure>
           <div className="flex flex-col justify-between gap-2 px-2 h-fit md:h-full">
            <div className="flex flex-col gap-1">
             <p className="text-lg font-semibold">
              {title} {quantity === 1 ? '' : `x ${quantity}`}
             </p>
             <p className="mb-auto text-sm font-medium text-gray-400">{author}</p>
             <p className="block font-medium md:self-end md:text-xl md:font-semibold md:hidden">$ {(price * quantity).toFixed(2)}</p>
            </div>
            <div className="flex items-center">
             <button className="px-2 text-base transition-all bg-gray-100 hover:bg-gray-300" onClick={() => decreaseOneInCart(bookId)}>
              -
             </button>
             <p className="px-5 text-lg">{quantity}</p>
             <button className={`px-2 text-base transition-all bg-gray-100  ${isDisabled ? 'opacity-40' : 'hover:bg-gray-300'}`} onClick={() => increaseOneInCart(bookId, stock, quantity)} disabled={isDisabled}>
              +
             </button>
            </div>
            <p className="pt-2 text-xs text-gray-400 transition-all font-base hover:cursor-pointer hover:text-gray-600 md:pt-0" onClick={() => removeCart(bookId)}>
             Delete from cart
            </p>
           </div>
           <p className="hidden font-medium md:self-end md:text-xl md:font-semibold md:block">${(price * quantity).toFixed(2)}</p>
          </motion.li>
         );
        })
       ) : (
        <p className="p-20 text-lg font-medium text-center text-gray-400 bg-white rounded-md ">Tu carrito es vacío.</p>
       )}
      </ul>
     </div>
     {cart && cart.length > 0 && (
      <div className="absolute bottom-0 left-0 w-full px-5 pt-2 pb-5 bg-gray-100 md:p-5">
       <button className="text-sm text-gray-500 hover:text-gray-900" onClick={handleClearCart}>
        Clear cart
       </button>
       <div className="flex items-center justify-between py-4">
        <h3 className="text-xl">Subtotal</h3>
        <p className="text-2xl font-semibold">$ {getSubtotal()}</p>
       </div>
       <OrderButton order={cart} />
       {/* <p className="pt-2 leading-5 ">*Los impuestos y el envío serán calculados al momento del pago</p> */}
      </div>
     )}
    </motion.section>
   )}
  </AnimatePresence>
 );
};

export default MiniCart;
