import { CgShoppingCart } from 'react-icons/cg';
import { useCartStore, useProductStore } from '../../store';

const CartIcon = () => {
 const cart = useCartStore((state) => state.cart);
 const { setIsOpenCart } = useProductStore((state) => state);
 const numberOfItems = cart && cart?.reduce((acc, item) => acc + item.quantity, 0);
 const handleMiniCartClick = () => {
  setIsOpenCart(true);
 };
 return (
  <div className="relative">
   <CgShoppingCart className="text-2xl hover:cursor-pointer" onClick={handleMiniCartClick} />
   {cart && numberOfItems > 0 && <span className="bg-gray-900 w-4 h-4 flex justify-center items-center rounded-full absolute top-0 -right-1 text-white text-xs scale-90">{numberOfItems}</span>}
  </div>
 );
};

export default CartIcon;