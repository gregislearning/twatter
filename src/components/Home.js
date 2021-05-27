import React from "react";
import WritePost from "./WritePost";
import Button from 'react-bootstrap/Button'
import { useAuth } from '../context/AuthContext'

const Home = () => {
  const {signOut} = useAuth()
  const handleLogout = () => {
    signOut()
  }
  return (
    <div>
      <h1>Home</h1>
      <WritePost />
      <div>Posts</div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Home;
