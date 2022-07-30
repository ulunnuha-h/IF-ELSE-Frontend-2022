import React, { useContext, useState } from "react"

export const baseUrl = 'https://ccd5-103-108-21-116.ngrok.io';

const AuthContext = React.createContext({});

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

export {useAuth,AuthProvider};