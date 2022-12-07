import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import FormField from "../Form/FormField.jsx";
import { userRegister } from "../../api/authApi";
import PostButton from "../Buttons/PostButton.jsx";
import Error from "../Error/Error.jsx";

const UserSignUp = ({ type }) => {
 const { register, handleSubmit, formState: { errors } } = useForm();
 const navigate = useNavigate()

 const isSeller = type === 'seller';
 const isBuyer = type === 'buyer';

 const { mutate, isLoading } = useMutation(userRegister, {
  onSuccess: (data) => {
   if (isSeller) {
    const { token, newSeller } = data;
    const { _id } = newSeller;
    localStorage.setItem('token', token);
    const user = { userId: _id, role: 'seller', store: newSeller.store };
    localStorage.setItem('user', JSON.stringify(user));

    if (token) navigate(`/seller/${_id}`);
   }
   if (isBuyer) {
    const { token, newBuyer } = data;
    const { _id } = newBuyer;
    localStorage.setItem('token', token);
    const user = { userId: _id, role: 'buyer' };
    localStorage.setItem('user', JSON.stringify(user));

    if (token) navigate(`/buyer/${_id}`);
   }
  },
 })

 const onSubmit = async (data) => {
  const { email, password, store, name } = data;

  const body = {
   name,
   email,
   password,
   role: isSeller ? 'seller' : 'buyer',
   ...isSeller && { store }
  };
  mutate(body)
 };

 return (
  <section className="page-container">
   <div className="main-content">
    <h2 className="page-title"> Create Account</h2>
    <h3 className="page-subtitle"><span className="font-special">Dear {isSeller ? "Seller" : "Buyer"},</span> It's a moment to start a new journey...</h3>
    <div className="sub-container">
     <form action="" className="form-ctn" onSubmit={handleSubmit(onSubmit)} >
      <FormField
       label="Full Name"
       name={'name'}
       type={'text'}
       register={register}
       errors={errors}
       rules={{
        required: true, minLength: 3,
        pattern: {
         value: /^[A-Za-z]+$/i,
         message: 'Name should contain only letters'
        }
       }}
      />
      <FormField
       label="Email"
       name={'email'}
       type={'email'}
       register={register}
       errors={errors}
       rules={{
        required: true,
        pattern: {
         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         message: 'Invalid email address'
        }
       }}
      />
      <FormField
       label="Password"
       name={'password'}
       type={'password'}
       register={register}
       errors={errors}
       rules={{
        required: true,
        pattern: {
         value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
         message: 'Password must contain at least 8 characters, one uppercase, one lowercase and one number'
        }
       }}
      />
      <FormField
       label="Confirm Password"
       type="password"
       name="confirmPassword"
       register={register}
       errors={errors}
       rules={{
        required: true,
        validate: (value) => value === password.current || 'The passwords do not match'

       }}
      />
      {isSeller && <div className="pt-5 flex flex-col gap-4">
       <div>
        <h4 className="font-special mb-1 text-lg">Create Your Store</h4>
        <p className="text-sm text-gray-700">This will be the face of your store</p>
       </div>
       <FormField
        label="Store Name"
        name="store"
        type="text"
        register={register}
        rules={{ required: true, message: 'Store name is required' }}
       />
      </div>}

      <PostButton isLoading={isLoading} buttonTitle={isSeller ? "Create your store" : "Create account"} />
      <Error />
     </form>
    </div>
   </div>
  </section>
 )
}

export default UserSignUp;