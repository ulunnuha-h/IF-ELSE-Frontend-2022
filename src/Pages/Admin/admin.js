import React from "react";
import { Outlet } from "react-router-dom";
import AdminLogin from "./Admin-login";

const Admin = () => {
    const login = true;

    if(!login) return <AdminLogin/>;
    else{
        return(
            <div>
                <nav></nav>
                <Outlet/>
            </div>
        );
    }
}

export default Admin;