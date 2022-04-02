import { Navigate } from "react-router";
import LoginPage from "./LoginPage";
function PrivateRoute({
  children,
  value
}) {
  const loggedIn = false;
  if (!loggedIn) {
    if(!value==="/login"){
      return <Navigate replace to="/login" />;
    }else{
      return children;
    }
  } else {
      if(value==="/login"){
        console.log("login");
        return <Navigate replace to="/home" />;
      }else{
        return children;
      }
  }
}

export default PrivateRoute;
