import {createContext, useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState();
}

//https://www.youtube.com/watch?v=X3qyxo_UTR4&t=1608s&ab_channel=DaveGray
//15:29