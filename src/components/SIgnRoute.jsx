import { Navigate, Outlet, useLocation } from "react-router-dom";

const SignRoute = () => {
 //if user is logged in, redirect to userpage
 const isAuth = localStorage.getItem("token");
 const user = JSON.parse(localStorage.getItem("user"));
 const pathToNavigate = `/${user?.role}/${user?.userId}`

 if (isAuth) {
  return <Navigate to={pathToNavigate} />;
 }
 //if user is not logged in, redirect to login page
 return <Outlet />;
};

export default SignRoute;