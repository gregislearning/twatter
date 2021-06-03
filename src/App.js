import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./models";
import { AuthProvider } from './context/AuthContext'
import Sidebar from './components/reusableComponents/Sidebar'
import HeaderNavbar from './components/reusableComponents/HeaderNavbar'
import styles from './styles/App.module.scss'
//context

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <div className={styles.appContainer}> 
            <Provider store={store}>
              <HeaderNavbar />
              <Sidebar />
              <Switch>
                <Route exact path="/" render={() => <Login val="login"/>} />
                <Route path="/signup" render={() => <Login val="signup"/>} />
                <ProtectedRoute path="/home" component={Home} />
              </Switch>
            </Provider>
        </div>
      </AuthProvider>
    </Router>
  );
}
