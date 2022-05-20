import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  console.log('pasa por authprovider que borra el estado al iniciar');
  return (
    <AuthContext.Provider value={{ auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

//https://www.youtube.com/watch?v=X3qyxo_UTR4&t=1608s&ab_channel=DaveGray
//15:29
