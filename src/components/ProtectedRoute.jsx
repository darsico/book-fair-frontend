import { Navigate, Outlet, useLocation } from 'react-router-dom';


export const ProtectedRoute = () => {
  const location = useLocation();
  const { pathname } = location;
  const path = pathname.split('/')[1];
  const isSeller = path === 'seller';

  const pathToNavigate = isSeller ? '/seller/login' : '/buyer/login';

  const isAuth = localStorage.getItem('token');

  return !isAuth
    ? <Navigate to={pathToNavigate} />
    : <Outlet />;
};

export default ProtectedRoute;
