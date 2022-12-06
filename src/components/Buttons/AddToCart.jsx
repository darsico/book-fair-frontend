import { useState } from 'react';
import { useCartStore, useProductStore } from '../../store.js';
import Modal from '../Modal/Modal.jsx';

const AddToCartButton = ({ data }) => {
 const user = JSON.parse(localStorage.getItem('user')) || {};
 const [isModalOpen, setIsModalOpen] = useState(false);
 const { setCart, cart } = useCartStore((state) => state);
 const { setIsOpenCart } = useProductStore((state) => state);
 const { _id, title, author, description, bookImage, price, stock, image, seller = false } = data || {};
 const bookToOrder = {
  bookId: _id,
  description,
  title,
  author,
  price,
  sellerId: seller._id,
  seller,
  buyerId: user?.userId,
  quantity: 1,
  image
 };

 const addToCart = () => {
  if (!user.userId) {
   setIsModalOpen(true);
   return;
  }

  const isNotTheSameSeller = cart && cart?.find((item) => item.sellerId !== seller._id);

  if (isNotTheSameSeller) {
   setOpen
  }

  setCart(bookToOrder);
  setIsOpenCart(true);
 };

 return (
  <div >
   <button
    onClick={addToCart}
    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-gray-900 transition-colors border border-gray-700 border-solid hover:bg-gray-700 hover:text-white hover:border-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 focus:ring-opacity-50 focus:shadow-outline-gray-500"
   >
    Agregar al Carrito
   </button>
   <Modal setIsOpen={setIsModalOpen} isOpen={isModalOpen} />
  </div>
 );
};

export default AddToCartButton;