import skeletonImage from '../../assets/image-skeleton.png';
import AddToCartButton from '../Buttons/AddToCart';
import BookCard from './BookCard.jsx'
const Book = ({ data, mockup = false, card }) => {
 const { title, author, description, bookImage, price, stock, image, seller } = data || {};

 const renderImage = (bookImage) => {
  if (bookImage) {
   return (
    <img
     onError={({ currentTarget }) => {
      currentTarget.onerror = null;
      currentTarget.src = skeletonImage;
     }}
     className="object-contain w-full h-full px-4"
     src={bookImage}
     alt=""
    />
   );
  }
  return <div className="object-cover w-full h-full gradient-animator"></div>;
 };

 if (card) return <BookCard renderImage={renderImage} book={data} />

 const getButton = () => {
  if (mockup) {
   return <button className="secondary-button w-full hover:text-white">Add to Cart</button>
  }
  if (stock === 0) {
   return <button disabled className=" w-full py-3 text-gray-500 text-center px-4  bg-white border border-solid  hover:cursor-not-allowed">
    Out of stock
   </button>
  }
  return <AddToCartButton data={data} />
 };

 return (
  <div className="w-full h-full">
   <figure className="h-64 lg:h-96 w-full">{renderImage(bookImage || image)}</figure>
   <div className="flex flex-col pt-2">
    <div className="flex justify-between items-center ">
     <div>
      {seller && <h5 className="text-gray-400 text-xs lg:text-sm font-medium">{seller.store}</h5>}
      <p className="text-sm lg:text-base">{author}</p>
     </div>
     <p className="text-base lg:text-xl text-gray-700">${price === 0 ? '' : price}</p>
    </div>
   </div>
   <h4 className="font-medium text-xl lg:text-2xl pb-2">{title}</h4>
   <p className="text-sm lg:text-base text-gray-600 pb-3 ">{description}</p>
   <p className="text-xs lg:text-sm">
    <span className="text-gray-600 ">Stock:</span> {stock === 0 ? 'Out of stock' : stock}
   </p>
   {!card && <div className='mt-4'>
    {getButton()}
   </div>}
  </div>
 );
};

export default Book;
