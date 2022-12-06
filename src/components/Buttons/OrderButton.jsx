import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../api/buyerApi";
import { useCartStore, useProductStore } from "../../store";
import Spinner from "../Loader/Spinner";

const OrderButton = ({ order }) => {
 const navigate = useNavigate()
 const { setIsOpenCart } = useProductStore(state => state)
 const { clearCart } = useCartStore(state => state)
 const { mutate, isLoading } = useMutation(createOrder, {
  onSuccess: (data) => {
   const { order } = data
   setIsOpenCart(false)
   clearCart()

   if (order._id) {
    navigate(`/buyer/${order.buyer._id}`)
   }
  },

 });
 const finalOrder = {
  sellerId: order[0]?.seller._id,
  buyerId: order[0]?.buyerId,
  books: order.map((book) => {
   return {
    bookId: book.bookId,
    quantity: book.quantity,
   }
  }),
 }
 const handleSubmit = () => {
  mutate(finalOrder);
 };

 return (
  <button className='main-button w-full text-2xl flex gap-4 justify-center items-center' onClick={handleSubmit}>
   Order Now {isLoading && <Spinner />}
  </button>
 );
}

export default OrderButton;