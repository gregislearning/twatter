import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useAuth } from '../context/AuthContext'
import styles from '../styles/LoginBox.module.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login = ({val}) => {
  const [reqFulfilled, setReqFulfilled] = useState(false)
  const [emailVal, setEmailVal] = useState("")
  const [passVal, setPassVal] = useState("")
  const [confirmPassVal, setConfirmPassVal] = useState("")
  const { signup, login } = useAuth()
  const history = useHistory();

  const Capitalize = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (val === "signup" && confirmPassVal !== passVal) {
      alert("not matched")
      return
    }
    else if (val === "signup") {
      signup(emailVal, passVal)
      history.push('/home')
    }
    else if (val === "login") {
      login(emailVal, passVal)
      history.push('/home')
    }
  }
  return (
    <div className={styles.container}>
      <h1>{Capitalize(val)}</h1>
      <Form className={styles.loginForm}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email"
            placeholder="Enter email"
            value={emailVal}
            onChange={(e) => setEmailVal(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            value={passVal}
            onChange={(e) => setPassVal(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirm" className={val === "signup" ? styles.signUpConfirmPass : styles.signUpHide}>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password"
            value={confirmPassVal}
            onChange={(e) => setConfirmPassVal(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" className={styles.rememberMe}/>
          <div className={styles.mutedText}>
            <Form.Text className="text-muted" className={styles.forgotPassword}>
              <Link to="#">Forgot Login?</Link>
            </Form.Text>
            <Form.Text className="text-muted" className={styles.forgotPassword}>
              {val === 'signup' ? <Link to='/'>Go to Login</Link> : <Link to='/signup'>Sign Up</Link>}
            </Form.Text>
          </div>
        </Form.Group>
        <Button 
          variant="primary" 
          onClick={handleSubmit} 
          className={styles.loginButton}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
export default Login;
