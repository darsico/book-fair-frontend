import { useProductStore } from "../store";
import skeletonImage from '../assets/image-skeleton.png'
const Book = ({ buttonPlaceHolder }) => {
 const { title, author, description, bookImage, price, stock } = useProductStore((state) => state);

 const renderImage = () => {
  if (bookImage) {
   return (
    <img
     onError={({ currentTarget }) => {
      currentTarget.onerror = null;
      currentTarget.src = skeletonImage;
     }}
     className="object-contain w-full h-full p-4"
     src={bookImage}
     alt=""
    />
   );
  }
  return <div className="object-cover w-full h-full gradient-animator"></div>;
 };
 return (
  <div className="sub-container pb-10">
   <div className="w-full md:w-2/4 h-full">
    <h3 className="text-gray-700 text-xl pb-4 underline">Preview</h3>
    <figure className="h-96 w-full">{renderImage()}</figure>
    <div className="flex flex-col pt-2">
     <div className="flex justify-between items-center ">
      <p className="text-base">{author || 'Author Name'}</p>
      <p className="text-xl text-gray-700">${price === 0 ? '' : price}</p>
     </div>
    </div>
    <h4 className="font-medium text-2xl py-2">{title || 'Book Title'}</h4>
    <p className="text-base text-gray-600 pb-3 ">{description || 'This is a short description of the book. Used as a placeholder. This can be modified'}</p>
    <p className="text-sm"><span className="text-gray-600 ">Stock:</span> {stock}</p>
    <button className="secondary-button w-full mt-8">Add to cart</button>
   </div>
  </div>
 );
};

export default Book;
