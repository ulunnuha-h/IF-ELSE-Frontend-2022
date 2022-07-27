import React from "react";
import { Navigate } from "react-router-dom";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import { useAuth } from "./Auth";

const ProtectedUser = () => {
    const {auth} = useAuth();
    if(auth.isLogged) return <User/>;
    else return <Navigate to="/login"/>
}

const ProtectedLogin = () => {
    const {auth} = useAuth();
    if(!auth.isLogged) return <Login/>;
    else return <Navigate to="/user"/>
}

export {ProtectedUser,ProtectedLogin};