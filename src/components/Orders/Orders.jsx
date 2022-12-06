const Orders = ({ orders, type, wide = true }) => {

 const isSeller = type === 'seller';
 const isBuyer = type === 'buyer';

 if (!orders || orders.length === 0) return <h4 className="text-lg text-gray-600">You have no orders yet.</h4>;

 return (
  <div className="flex flex-col gap-4">
   <h4 className="text-lg font-medium">Checkout your orders</h4>
   <div className={`columns-2 w-full md:columns-3 ${wide && "lg:columns-4"}`}>
    {orders.map((order) => {
     const { _id, books, total, seller = false, createdAt, buyer } = order;
     console.log(buyer)
     const { name: buyerName, email: buyerEmail } = buyer || {};
     return (
      <div key={_id} className="flex flex-col gap-2 border-2 border-solid border-gray-200 rounded-lg px-3 py-4  mb-4  w-full h-fit  break-inside-avoid ">
       <div>
        {isBuyer && <h5 className="font-special leading-5 text-sm sm:text-base">{seller.store}</h5>}
        <h5 className={`text-xs md:text-sm ${isSeller ? 'text-gray-500' : 'text-gray-400'}font-medium`}>
         ID: <span>{_id}</span>
        </h5>
        {isSeller && (<div className="flex flex-col gap-[0.5px] py-3">
         <p className="text-xs text-gray-500 font-medium">Order for</p>
         <h4 className="text-base font-medium">{buyerName}</h4>
         <p className="text-sm text-gray-500">{buyerEmail}</p>
        </div>)}
       </div>
       <div className="grid grid-cols-1 border-solid border-t border-b border-gray-300 pt-3 pb-4">
        {books.map((item, index) => {
         const { _id, title, author, price, image } = item.book;
         const { quantity } = item;
         return (
          <>
           <div className=" grid grid-cols-1 xl:grid-cols-[1fr_2fr] py-3 md:p-4 items-start justify-center gap-2 xl:gap-3" key={_id}>
            <figure className="h-20 w-20">
             <img src={image} alt="" className="object-contain h-full w-full" />
            </figure>
            <div className="flex flex-col h-full gap-1 xl:gap-2 ">
             <h5 className="text-sm sm:text-base leading-4">{title}</h5>
             <p className="text-xs md:text-md text-gray-700">{author}</p>
             <div className="flex justify-between mt-auto pt-4">
              <p className="text-xs font-medium">${price}</p>
              <p className="text-xs font-medium">Qty: {quantity}</p>
             </div>
            </div>
           </div>
           {books.length === index + 1 || (books.length !== 1 && <hr className="text-gray-700 font-normal mt-2" />)}
          </>
         );
        })}
       </div>
       <div>
        <p className="text-gray-500 text-xs">
         x{books.length} {books.length > 1 ? 'books' : 'book'}
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
