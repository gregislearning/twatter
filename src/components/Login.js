import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Input, Checkbox, Button } from "antd"
import { useAuth } from '../context/AuthContext'

import { Context } from "../context/Store";

const Login = () => {
  const [loginState, setLoginState] = useContext(Context);
  const history = useHistory();
  const onClick = () => {
    setLoginState({ loginStatus: true });
    history.push("/home");
  };
  return (
    <div>
        <Form>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: "Please input your username."}]}>
                <Input>
                </Input>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password."}]}>
            </Form.Item>
             <Button onClick={onClick}>Login</Button>
        </Form>
     
    </div>
  );
};
export default Login;
