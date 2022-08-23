import React from "react";
import { Navigate } from "react-router-dom";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";

const ProtectedUser = () => {
    if(localStorage.getItem('token') !== null) return <User/>;
    else return <Navigate to="/mahasiswa/login"/>
}

const LoginRoute = () => {
    if(localStorage.getItem('token') == null) return (
        <Login/>
    );
    else return <Navigate to="/user"/>
}

export {ProtectedUser,LoginRoute};