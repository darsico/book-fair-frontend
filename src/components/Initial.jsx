import { Link } from "react-router-dom";

const Initial = ({ type }) => {
 return (
  <div className="main-content">
   <h2 className="page-title"> Welcome {type === "seller" ? "Seller" : "Buyer"}</h2>
   <h3 className="page-subtitle">Join us or Login to your account</h3>
   <div className="sub-container">
    <Link to={`/${type}/new`} className="main-button">Sign up</Link>
    <Link to={`/${type}/login`} className="secondary-button">Log in</Link>
   </div>
  </div>
 );
}

export default Initial;