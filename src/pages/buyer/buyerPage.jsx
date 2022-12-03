import Info from '../../components/Info/Info';
import Orders from '../../components/Orders/Orders';

const BuyerPage = ({ type = 'buyer' }) => {
 const isSeller = type === 'seller';
 const isBuyer = type === 'buyer';

 const data = {
  store: 'The Book Store',
  name: 'John Doe',
  email: 'user@email',
  _id: '123',
 };

 const orders = [
  {
   seller: {
    store: 'The Book Store',
   },
   _id: '123',
   total: 200,
   books: [
    {
     _id: '1223',
     title: 'my title is really really really long and i will kill your design',
     author: 'John Doe',
     price: 100,
     quantity: 1,
     image: 'https://m.media-amazon.com/images/I/51TGY+wPCAL._AC_SY780_.jpg',
    },
    {
     _id: '32131',
     title: 'PHP Internals',
     author: 'John Doe',
     price: 100,
     quantity: 1,
     image: 'https://m.media-amazon.com/images/I/51AkW1znNmL._AC_SY780_.jpg',
    },
    {
     _id: '1223',
     title: 'MySQL Internals',
     author: 'John Doe',
     price: 100,
     quantity: 1,
     image: 'https://m.media-amazon.com/images/I/51TGY+wPCAL._AC_SY780_.jpg',
    }
   ],
  },
  {
   createdAt: '2021-09 - 01T12: 00: 00.000Z',
   seller: {
    store: 'The Book Store',
   },
   _id: '123',
   total: 100,
   books: [{
    _id: '1243',
    title: 'JAva Internals',
    author: 'John Doe',
    price: 100,
    quantity: 1,
    image: 'https://m.media-amazon.com/images/I/51NVQOHq1YL.jpg',
   }],
  },
  {
   createdAt: '2021-09 - 01T12: 00: 00.000Z',
   seller: {
    store: 'The Book Store',
   },
   _id: '123',
   total: 100,
   books: [{
    _id: '1243',
    title: 'JAva Internals',
    author: 'John Doe',
    price: 100,
    quantity: 1,
    image: 'https://m.media-amazon.com/images/I/51NVQOHq1YL.jpg',
   }],
  },
 ];

 const { store, name, email, _id } = data;

 const infoProps = { store, name, email, _id, isSeller };

 return (
  <section className="page-container">
   <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr]  gap-5 mx-auto">
    <div>
     {isSeller && (
      <div className=" text-3xl font-special pb-10">
       <h6>| {store}</h6>
      </div>
     )}
     <h2 className=" text-xl">
      Welcome {isSeller ? 'to your store,' : 'back'} <span className="text-2xl font-semibold">{name}</span>
     </h2>
     <Info {...infoProps} />
    </div>

    {isSeller && (
     <div className="flex flex-col gap-4 self-end">
      <SellerMenu id={_id} />
     </div>
    )}

    {isBuyer && (
     <Orders orders={orders} />
    )}
   </div>
  </section>
 );
};

export default BuyerPage;
