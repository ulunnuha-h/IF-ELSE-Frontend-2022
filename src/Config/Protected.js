import React from "react";
import { Navigate } from "react-router-dom";
import User from "../Pages/User/User";
import Login from "../Pages/Login/Login";

const ProtectedUser = () => {
    if(localStorage.getItem('UserId')) return <User/>;
    else return <Navigate to="/login"/>
}

const ProtectedLogin = () => {
    if(!localStorage.getItem('UserId')) return <Login/>;
    else return <Navigate to="/user"/>
}

export {ProtectedUser,ProtectedLogin};