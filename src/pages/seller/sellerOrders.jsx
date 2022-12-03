import { Link } from 'react-router-dom';

const SellerOrders = () => {
 const tableHeader = ['Image', 'Title', 'Author', 'Description', 'Price p/u', 'Quantity', 'Total'];
 const orders = [
  {
   id: 2,
   title: 'The Great Gatsby',
   author: 'F. Scott Fitzgerald',
   description: 'This is literature book',
   price: 35,
   quantity: 10,
   total: 20,
   image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
  },
  {
   id: 2,
   title: 'The Great Gatsby',
   author: 'F. Scott Fitzgerald',
   description: 'This is literature book',
   price: 35,
   quantity: 10,
   total: 20,
   image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=912&q=80',
  },
 ];

 const displayTableBody = (data) => {
  return data.map((item) => {
   return (
    <tbody>
     <tr key={item.id}>
      <td className="py-8 px-3 flex ">
       <figure className=" w-[90px] self-center ">
        <img src={item.image} className="object-cover -mb-4" alt="" />
       </figure>
      </td>
      <td className="py-4 px-3 whitespace-nowrap">{item.title}</td>
      <td className="py-4 px-3 whitespace-nowrap">{item.author}</td>
      <td className="py-4 px-3  whitespace-nowrap break-words">{item.description}</td>
      <td className="py-4 px-3">{item.price}</td>
      <td className="py-4 px-3">{item.quantity}</td>
      <td className="py-4 px-3">{item.total}</td>
     </tr>
    </tbody>
   );
  });
 };

 const displayTableHeader = (tableHeader) => {
  return (
   <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
     {tableHeader.map((header, index) => (
      <th key={index} scope="col" className="py-3 px-2 ">
       {header}
      </th>
     ))}
    </tr>
   </thead>
  );
 };
 return (
  <section className="page-container">
   <div className="flex flex-col gap-5   mx-auto">
    <div className=" text-3xl font-special">
     <h6>| Book Store</h6>
    </div>
    <Link to="/seller/1/books/new">
     <div className="flex items-center gap-2"></div>
    </Link>
    <h3 className="text-lg">
     <span className="text-2xl">📑</span> Check out your orders
    </h3>
    <div className="sub-container">
     <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
       {displayTableHeader(tableHeader)}

       {displayTableBody(orders)}
      </table>
     </div>
    </div>
   </div>
  </section>
 );
};

export default SellerOrders;
