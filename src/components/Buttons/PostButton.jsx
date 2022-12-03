import Spinner from "../Loader/Spinner";

const PostButton = ({ isLoading = false, buttonTitle = "Button" }) => {
 return (
  <button className="main-button mt-4 flex justify-center items-center gap-4" type='submit'>{buttonTitle} {isLoading && <Spinner />}</button>
 );
}

export default PostButton;