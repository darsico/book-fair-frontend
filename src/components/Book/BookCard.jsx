import { useState } from "react";
import { Link } from "react-router-dom";
import { descriptionFormat } from "../../utils/descriptionFormat";

const BookCard = ({ book, renderImage }) => {
 const { title, author, description, price, stock, image, seller } = book;
 const [showDescription, setShowDescription] = useState(false);
 const linkTitle = title.replace(/ /g, '+').toLowerCase();

 return (
  <Link to={`/sellers/${seller._id}/?title=${linkTitle}`}>
   <div className="w-full h-full hover:shadow-lg p-4">
    <figure className="h-64 lg:h-96 w-full">{renderImage(image)}</figure>
    <div className="flex flex-col pt-2">
     <div className="flex justify-between items-center ">
      <div className="pt-2">
       <h5 className="text-gray-400 text-sm lg:text-sm font-medium">{seller.store}</h5>
       <p className="text-sm lg:text-base">{author}</p>
      </div>
      <p className="text-base lg:text-xl text-gray-700">${price === 0 ? '' : price}</p>
     </div>
    </div>
    <h4 className="font-medium text-xl lg:text-2xl pb-2">{title}</h4>
    <p className="text-sm lg:text-base text-gray-600 pb-3 ">{descriptionFormat(description)}</p>
    <p className="text-xs lg:text-sm">
     <span className="text-gray-600 ">Stock:</span> {stock === 0 ? 'Out of stock' : stock}
    </p>
   </div>
  </Link>
 )

}

export default BookCard