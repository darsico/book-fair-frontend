import { useProductStore } from '../../store';
import Book from './Book';
const BookPreview = () => {
 const { title, author, description, bookImage, price, stock } = useProductStore((state) => state);

 const data = {
  title,
  author,
  description,
  bookImage,
  price,
  stock,
 };
 return (
  <div className="sub-container pb-10">
   <h3 className="text-gray-700 text-xl pb-4 underline">Preview</h3>
   <div className='w-full xl:w-1/2'>
    <Book data={data} mockup={true} />
   </div>
  </div>
 );
};

export default BookPreview;
