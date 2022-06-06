import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  console.log(isLoggedIn)
  
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default Auth;
