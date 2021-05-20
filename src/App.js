import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./components/Home";
import Store from "./context/Store";
import { Provider } from "react-redux";
import store from "./models";
import { AuthProvider } from './context/AuthContext'

//context

export default function App() {
  return (
    <AuthProvider>
    <div className="App"> 
      <Router>
        <Provider store={store}>
          <Store>
            <Route exact path="/" render={() => <Login val="login"/>} />
            <Route path="/signup" render={() => <Login val="signup"/>} />
            <Switch>
              <ProtectedRoute exact path="/home" component={Home} />
            </Switch>
          </Store>
        </Provider>
      </Router>
    </div>
    </AuthProvider>
    
  );
}
