import { AiOutlinePlus } from "react-icons/ai";
import { GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";

const SellerMenu = ({ id: _id }) => {
 return (
  <>
   <div className="w-fit">
    <Link to={`/seller/${_id}/books`} className="inline-flex items-center gap-2">
     <span className="text-2xl">📚</span>
     <h3 className="text-sm underline inline"> Check out your books here</h3> <GrLinkNext className="text-sm" />
    </Link>
   </div>
   <div className=" w-fit">
    <Link to={`/seller/${_id}/orders`} className="inline-flex items-center gap-2">
     <span className="text-2xl">📑</span>
     <h3 className="text-sm underline inline"> Go to your orders </h3> <GrLinkNext className="text-sm" />
    </Link>
   </div>
   <div className=" w-fit ">
    <Link to={`/seller/${_id}/books/new`} className=" inline-flex items-center gap-2">
     <span className="text-2xl">📖</span>
     <h3 className="text-sm underline inline "> Create new book</h3> <AiOutlinePlus />
    </Link>
   </div>
  </>
 );
}

export default SellerMenu;