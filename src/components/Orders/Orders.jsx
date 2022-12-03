const Orders = ({ orders }) => {

 if (orders.length === 0 || !orders) return <h4 className='text-lg font-medium'>You have no orders yet</h4>

 return (
  <div className="flex flex-col gap-4">
   <h4 className='text-lg font-medium'>Checkout your orders</h4>
   <div className="grid grid-col-1  md:grid-cols-2 xl:grid-cols-3 gap-5   grid-flow-row">
    {orders.map((order) => {
     const { _id, books, total, seller } = order
     return (
      <div key={_id} className="flex flex-col gap-2 border-2 border-solid border-gray-200 rounded-lg px-3 py-4">
       <div>
        <h5 className='font-special'>{seller.store}</h5>
        <h5 className="text-sm text-gray-400  font-medium">Order ID: <span>{_id}</span></h5>
       </div>
       <div className='grid grid-cols-1 border-solid border-t border-b border-gray-300 pt-3 pb-4'>
        {books.map(book => {
         const { _id, title, author, price, quantity, image } = book
         return (
          <div className='grid grid-cols-[1fr_2fr] p-4 items-start justify-center ' key={_id} >
           <figure className='h-20 w-20'>
            <img src={image} alt="" className='object-contain h-full w-full' />
           </figure>
           <div className='flex flex-col h-full gap-2 '>
            <h5 className='text-base leading-5'>{title}</h5>
            <p className='text-sm text-gray-700'>{author}</p>
            <div className='flex justify-between mt-auto pt-4'>
             <p className='text-xs font-medium'>${price}</p>
             <p className='text-xs font-medium'>Qty: {quantity}</p>
            </div>
           </div>
          </div>
         )

        },
        )}
       </div>
       <div>
        <p className='text-gray-500 text-xs'>x{books.length} {books.length > 1 ? "books" : "book"}</p>
        <p className='font-medium text-lg'>${total}</p>
       </div>
      </div>
     );
    })}
   </div>
  </div>
 );
}

export default Orders;