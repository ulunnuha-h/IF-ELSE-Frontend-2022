import React from "react";
import { Navigate } from "react-router-dom";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";
import { useAuth } from "./Auth";
import { Route } from "react-router-dom";
import LoginForm from "../Pages/Login/Login-form";

const ProtectedUser = () => {
    const {auth} = useAuth();
    if(auth.isLogged) return <User/>;
    else return <Navigate to="/mahasiswa/login"/>
}

const LoginRoute = () => {
    const {auth} = useAuth();
    if(!auth.isLogged) return (
        <Login/>
    );
    else return <Navigate to="/user"/>
}

export {ProtectedUser,LoginRoute};