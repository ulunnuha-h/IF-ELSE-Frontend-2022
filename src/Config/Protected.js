import React from "react";
import { Navigate } from "react-router-dom";

const Protected = ({token,children}) => {
    if(token === '') {
        return <Navigate to="login"/>;
    }
    else return children;
}

export default Protected;