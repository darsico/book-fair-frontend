import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/authApi';
import PostButton from '../Buttons/PostButton.jsx';
import Error from '../Error/Error';
import FormField from '../Form/FormField.jsx';

const UserLogin = ({ type }) => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();

 const navigate = useNavigate();
 const isSeller = type === 'seller';
 const isBuyer = type === 'buyer';

 const { mutate, isLoading } = useMutation(userLogin, {
  onSuccess: (data) => {
   if (isSeller) {
    const { token, seller } = data;
    const { _id } = seller;
    const user = { userId: _id, role: 'seller', store: seller.store };
    localStorage.setItem('user', JSON.stringify(user));

    if (token) navigate(`/seller/${_id}`);
   }
   if (isBuyer) {
    const { token, buyer } = data;
    const { _id } = buyer;
    const user = { userId: _id, role: 'buyer' };
    localStorage.setItem('user', JSON.stringify(user));

    if (token) navigate(`/buyer/${_id}`);
   }
  },
  onError: (error) => {
   console.log(error);
  },
 });

 const onSubmit = (data) => {
  const { email, password } = data;
  const body = {
   email,
   password,
   role: isSeller ? 'seller' : 'buyer',
  };

  mutate(body);
 };

 return (
  <div className="main-content">
   <h2 className="page-title"> Login</h2>
   <h3 className="page-subtitle">
    <span className="font-special">Dear {isSeller ? 'Seller' : 'Buyer'},</span> It's a moment to start a new journey...
   </h3>
   <div className="sub-container">
    <form action="" className="form-ctn" onSubmit={handleSubmit(onSubmit)}>
     <FormField label="Email" name={'email'} type={'email'} register={register} errors={errors} rules={{
      required: true,
      pattern: {
       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
       message: 'invalid email address'
      }
     }} />
     <FormField label="Password" name={'password'} type={'password'} register={register} errors={errors} rules={{
      required: true,
      minLength: {
       value: 6,
       message: 'Password must have at least 6 characters'
      }
     }} />
     <PostButton isLoading={isLoading} buttonTitle="Login" />
     <Error />
     <div className="py-4 gap-4 flex flex-col">
      <p className="text-center text-gray-500">Don't have an account?</p>
      <Link to={`/${type}/new`} className="secondary-button w-full hover:text-white">
       Sign up
      </Link>
     </div>
    </form>
   </div>
  </div>
 );
};

export default UserLogin;
