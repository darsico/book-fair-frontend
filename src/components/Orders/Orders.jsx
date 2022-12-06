import { useState } from 'react';
import { formatTime } from '../../utils/formatDate';

const Orders = ({ orders, type, wide = true }) => {
 // const [bookQuantity, setBookQuantity] = useState(1);

 const isSeller = type === 'seller';
 const isBuyer = type === 'buyer';

 if (!orders || orders.length === 0) return <h4 className="text-lg text-gray-600">You have no orders yet.</h4>;

 return (
  <div className="flex flex-col gap-4">
   <h3 className="text-lg">
    <span className="text-2xl">📑</span> Check out your orders
   </h3>

   <div className={`columns-2 w-full md:columns-3 ${wide && 'lg:columns-4'}`}>
    {orders.map((order) => {
     const { _id, books, total, seller = false, createdAt, buyer } = order;

     const createdTime = formatTime(createdAt) || '';

     const { name: buyerName, email: buyerEmail } = buyer || {};
     let booksQuantity = 0;
     return (
      <div key={_id} className="flex flex-col gap-2 border-2 border-solid border-gray-200 rounded-lg px-3 py-4  mb-4  w-full h-fit  break-inside-avoid ">
       <div>
        <h5 className={`text-xs md:text-sm ${isSeller ? 'text-gray-600' : 'text-gray-400'} font-medium`}>
         ID: <span>{_id.slice(-9)}</span>
        </h5>
        {isBuyer && <h5 className="font-special leading-5 text-sm sm:text-base py-1">{seller.store || 'Book Store'}</h5>}
        <p className="text-xs text-gray-500 ">
         Created at: <span className="">{createdTime}</span>
        </p>
        {isSeller && (
         <div className="flex flex-col gap-[0.5px] py-3">
          <p className="text-xs text-gray-500 font-medium">Order for</p>
          <h4 className="text-base font-medium">{buyerName}</h4>
          <p className="text-sm text-gray-500">{buyerEmail}</p>
         </div>
        )}
       </div>
       <div className="grid grid-cols-1 border-solid border-t border-b border-gray-300 pt-3 pb-4">
        {books.map((item, index) => {
         console.log(books);
         const { _id, title, author, price, image } = item.book;
         const { quantity } = item;
         booksQuantity += quantity;
         return (
          <div key={_id}>
           <div className=" grid grid-cols-1 xl:grid-cols-[1fr_2fr] py-3 md:px-1 items-start justify-center gap-2 xl:gap-3">
            <figure className="h-20 w-20">
             <img src={image} alt="" className="object-contain h-full w-full" />
            </figure>
            <div className="flex flex-col h-full gap-1 xl:gap-2 ">
             <h5 className="text-sm sm:text-base leading-3">{title}</h5>
             <p className="text-xs md:text-md text-gray-700">{author}</p>
             <div className="flex justify-between mt-auto pt-4">
              <p className="text-xs font-medium">${price}</p>
              <p className="text-xs font-medium">Qty: {quantity}</p>
             </div>
            </div>
           </div>
           {books.length === index + 1 || (books.length !== 1 && <hr className="text-gray-700 font-normal mt-2" />)}
          </div>
         );
        })}
       </div>
       <div>
        <p className="text-gray-500 text-xs">
         x{booksQuantity} {books.length > 1 ? 'books' : 'book'}
        </p>
        <p className="font-medium text-sm sm:text-lg">${total}</p>
       </div>
      </div>
     );
    })}
   </div>
  </div>
 );
};

export default Orders;
