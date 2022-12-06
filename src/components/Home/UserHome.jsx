import Info from "../Info/Info";
import Orders from "../Orders/Orders";
import SellerMenu from "../Menus/SellerMenu";

const UserHome = ({ data, type, orders }) => {
 const isSeller = type === 'seller';
 const isBuyer = type === 'buyer';

 if (!isBuyer && !isSeller || !data) {
  return <h1>404</h1>;
 }

 const { store, name, email, _id } = data;

 const infoProps = { store, name, email, _id, isSeller };

 return (
  <div className="flex flex-col md:grid md:grid-cols-[1fr_2fr]  gap-5 mx-auto">
   <div>
    {isSeller && (
     <div className=" text-3xl font-special pb-10">
      <h6>| {store || "Default Store"}</h6>
     </div>
    )}
    <h2 className=" text-xl">
     Welcome {isSeller ? 'to your store,' : 'back'} <span className="text-2xl font-semibold">{name || "Seller Name"}</span>
    </h2>
    <Info {...infoProps} />
   </div>

   {isSeller && (
    <div className="flex flex-col gap-4 self-end">
     <SellerMenu id={_id} />
    </div>
   )}

   {isBuyer && (
    <Orders orders={orders} wide={false} type="buyer" />
   )}
  </div>

 );
}

export default UserHome;