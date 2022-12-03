import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../../api/authApi';
import PostButton from '../Buttons/PostButton.jsx';
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
    localStorage.setItem('token', token);
    if (token) navigate(`/seller/${_id}`);
   }
   if (isBuyer) {
    const { token, buyer } = data;
    const { _id } = buyer;
    localStorage.setItem('token', token);
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
    <span className="font-special">Dear {isSeller ? "Seller" : "Buyer"},</span> It's a moment to start a new journey...
   </h3>
   <div className="sub-container">
    <form action="" className="form-ctn" onSubmit={handleSubmit(onSubmit)}>
     <FormField label="Email" name={'email'} type={'email'} register={register} errors={errors} rules={{ required: true }} />
     <FormField label="Password" name={'password'} type={'password'} register={register} errors={errors} rules={{ required: true }} />
     <FormField label="Confirm Password" name={'confirmPassword'} type={'password'} register={register} errors={errors} rules={{ required: true }} />
     <PostButton isLoading={isLoading} buttonTitle="Login" />
    </form>
   </div>
  </div>

 );
};

export default UserLogin;
