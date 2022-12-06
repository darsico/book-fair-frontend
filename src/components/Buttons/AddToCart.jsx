import { useState } from 'react';
import { useCartStore, useProductStore } from '../../store.js';
import Modal from '../Modal/Modal.jsx';

const AddToCartButton = ({ data }) => {
 const user = JSON.parse(localStorage.getItem('user')) || {};
 const [isSameSellerModal, setIsSameSellerModal] = useState(false);
 const [noSellerModal, setNoSellerModal] = useState(false);
 const { setCart, cart } = useCartStore((state) => state);
 const { setIsOpenCart } = useProductStore((state) => state);
 const { _id, title, author, description, price, stock, image, seller = false } = data || {};
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
  image,
  stock,
 };


 const getLatestSellerInCart = () => {
  const latestSeller = cart[0]?.seller._id;
  return latestSeller;
 };

 const sameSellerModalProps = {
  setIsOpen: setIsSameSellerModal,
  isOpen: isSameSellerModal,
  modalTitle: "You can't order from different sellers",
  modalText: "I'm sorry, we detected that you are trying to order from different sellers, however you can order from one seller at a time.",
  pathToRedirect: `/seller/${getLatestSellerInCart()}`,
  buttonText: 'Go to your seller books'
 };

 const noSellerProps = {
  setIsOpen: setNoSellerModal,
  isOpen: noSellerModal,
  modalTitle: 'You need to be a buyer',
  modalText: 'You need to be a buyer to order',
  pathToRedirect: `/seller/${user?.userId}`,
  buttonText: 'Go to your seller profile',
 }

 const addToCart = () => {

  if (user.role && user.role !== 'buyer') {
   setNoSellerModal(true);
   return
  }
  const isNotTheSameSeller = cart && cart?.find((item) => item.sellerId !== seller._id);

  if (isNotTheSameSeller) {
   setIsSameSellerModal(true);
   return;
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
    Add to cart
   </button>
   <Modal {...sameSellerModalProps} />
   <Modal {...noSellerProps} />

  </div>
 );
};

export default AddToCartButton;