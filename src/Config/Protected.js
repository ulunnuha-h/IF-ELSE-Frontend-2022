import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Auth } from "./Auth";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";

const ProtectedUser = () => {
    const auth = useContext(Auth);
    if(auth.isLogged()) return <User/>;
    else return <Navigate to="/login"/>
}

const ProtectedLogin = () => {
    const auth = useContext(Auth);
    if(!auth.isLogged()) return <Login/>;
    else return <Navigate to="/user"/>
}

export {ProtectedUser,ProtectedLogin};