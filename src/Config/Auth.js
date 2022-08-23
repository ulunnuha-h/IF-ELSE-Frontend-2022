import React, { useContext, useState } from "react"

export const baseUrl = 'https://api-ifelse.ub.ac.id';
const AuthContext = React.createContext({});

const getToken = () => {
    const adminToken = localStorage.getItem('adminToken');
    const Authorization = `Bearer ${adminToken}`;
    return(Authorization);
}

const getUserToken = () => {
    const userToken = localStorage.getItem('token');
    const Authorization = `Bearer ${userToken}`;
    return(Authorization);
}

const AuthProvider = ({children}) => {
    const [auth,setAuth] = useState({isLogged : false});

    return(
        <AuthContext.Provider value={{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    return useContext(AuthContext);
}

export {useAuth,AuthProvider,getToken,getUserToken};