import React, { useContext } from "react";
import { Context } from "../context/Store";
import { Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const [loginState, setLoginState] = useContext(Context);
  console.log(loginState);
  const Component = props.component;
  return loginState.loginStatus ? <Component /> : <Redirect to="/" />;
};

export default ProtectedRoute;
