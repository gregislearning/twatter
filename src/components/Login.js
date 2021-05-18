import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from '../context/AuthContext'
import styles from '../styles/LoginBox.module.scss'
import LoginInput from './reusableComponents/LoginInput'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { Context } from "../context/Store";

const Login = () => {
  const [loginState, setLoginState] = useContext(Context);
  // const { signup } = useAuth()
  const history = useHistory();

  const onClick = () => {
    setLoginState({ loginStatus: true });
    history.push("/home");
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // signup()
  }
  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
