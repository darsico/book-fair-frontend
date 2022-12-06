const Info = ({ isSeller: displayStore = false, name, store, email, isPrivate = true }) => {

 return (
  <div className="sub-container">
   <div className="py-10">
    <span className="text-3xl">👤</span>
    {isPrivate && <h3 className="text-sm text-gray-700 font-semibold py-2">Your info:</h3>}
    <h5>
     <span className="text-sm text-gray-700">Name:</span> {name}
    </h5>
    <h5>
     <span className="text-sm text-gray-700">Email:</span> {email}
    </h5>
    {displayStore && (
     <h5>
      <span className="text-sm text-gray-700">Store Name:</span> {store}
     </h5>
    )}
   </div>
  </div>
 );
};

export default Info;
