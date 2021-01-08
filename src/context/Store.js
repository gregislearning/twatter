import React, { useState } from "react";

const initialState = {
  loginStatus: false
};

export const Context = React.createContext();

const Store = ({ children }) => {
  const [loginState, setLoginState] = useState(initialState);

  return (
    <Context.Provider value={[loginState, setLoginState]}>
      {children}
    </Context.Provider>
  );
};

export default Store;
