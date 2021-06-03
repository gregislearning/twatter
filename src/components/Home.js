import React from "react";

import Button from 'react-bootstrap/Button'
import { useAuth } from '../context/AuthContext'
import styles from '../styles/Home.module.scss'

//components
import WritePost from "./WritePost";
import VocabWord from './reusableComponents/VocabWord'
const Home = () => {
  const { signOut, currentUser} = useAuth()
  const handleLogout = () => {
    signOut()
  }
  return (
    <div className={styles.homeContainer}>
      {/* <h1>Home{console.log(currentUser)}</h1>
      <WritePost />
      <div>Posts</div>
      <Button onClick={handleLogout}>Logout</Button>
      <VocabWord /> */}
    </div>
  );
};

export default Home;
