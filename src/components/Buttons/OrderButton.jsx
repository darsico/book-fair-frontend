import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../api/buyerApi';
import { useCartStore, useProductStore } from '../../store';
import Spinner from '../Loader/Spinner';
import Modal from '../Modal/Modal';

const OrderButton = ({ order }) => {
 const navigate = useNavigate();
 const user = JSON.parse(localStorage.getItem('user')) || {};
 const [isModalOpen, setIsModalOpen] = useState(false);
 const [noBuyerModal, setNoBuyerModal] = useState(false);
 const { setIsOpenCart } = useProductStore((state) => state);
 const { clearCart } = useCartStore((state) => state);
 const { mutate, isLoading } = useMutation(createOrder, {
  onSuccess: (data) => {
   const { order } = data;
   setIsOpenCart(false);
   clearCart();

   if (order._id) {
    navigate(`/buyer/${order.buyer._id}`);
   }
  },
 });
 const finalOrder = {
  sellerId: order[0]?.seller._id,
  buyerId: user.userId,
  books: order.map((book) => {
   return {
    bookId: book.bookId,
    quantity: book.quantity,
   };
  }),
 };
 const handleSubmit = () => {
  if (!user.userId) {
   setIsModalOpen(true);
   return;
  }
  mutate(finalOrder);
 };

 const modalProps = {
  setIsOpen: setIsModalOpen,
  isOpen: isModalOpen,
  modalTitle: 'You need to be logged in',
  modalText: 'You need to be logged in to order',
  pathToRedirect: '/buyer/login',
  buttonText: 'Go to login',
 };

 const noBuyerProps = {
  setIsOpen: setNoBuyerModal,
  isOpen: noBuyerModal,
  modalTitle: 'You need to be a buyer',
  modalText: 'You need to be a buyer to order',
  pathToRedirect: `/seller/${user?.userId}`,
  buttonText: 'Go to your seller profile',
 }

 return (
  <>
   <button className="main-button w-full text-2xl flex gap-4 justify-center items-center" onClick={handleSubmit}>
    Order Now {isLoading && <Spinner />}
   </button>
   <Modal {...modalProps} />
   <Modal {...noBuyerProps} />
  </>
 );
};

export default OrderButton;
