import React, { useContext, useState } from "react"

export const baseUrl = 'https://2f11-103-108-23-25.ngrok.io';
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