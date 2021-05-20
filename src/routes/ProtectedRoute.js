import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = (props) => {
  const { currentUser } = useAuth()
  
  const Component = props.component;
  return currentUser ? <Component /> : <Redirect to="/" />;
};

export default ProtectedRoute;
