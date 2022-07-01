import React from "react";
import {Link} from 'react-router-dom'

const Error404 = () =>{
    return(
    <div className="d-flex flex-column align-items-center justify-content-center" style={{"height":"100vh"}}>
        <h1>404 Not Found</h1>
        <p>Hayo nyari apa kamu disini ? nyasar ya</p>
        <Link to="/">Home</Link>
        
    </div>
    );
}

export default Error404;