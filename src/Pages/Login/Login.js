import React from "react";
import './Login.css';
import { motion } from "framer-motion";
import bg from "../../Assets/background.svg";
import logo from "../../Assets/Logo/logo-ifelse.png"
import { Outlet } from "react-router-dom";

const Login = () => {
    
    return(
        <main style={{backgroundColor:'#ba4b00',zIndex:'-1',backgroundImage:`url(${bg})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
        <motion.div 
            animate={{opacity:1}} 
            initial={{opacity:0}} 
            className="login-page row mx-auto px-0 container-lg">
            <div className="col-md-6 col-12 login-image d-flex align-items-center">
                <div className="px-5 align-self-center m-4">
                    <motion.img initial={{scale:0.3,rotate:-60}} animate={{scale:1,rotate:0}} transition={{type:"tween",ease:"circOut",duration:0.5}} src={logo} alt="logoifelse" className="img-fluid" style={{"borderRadius":"50%","backgroundColor":"var(--color-3)"}}></motion.img>
                </div>
            </div>
            <div className="col-md-6 col-12 m-auto px-0">
                <Outlet/>
            </div>
        </motion.div>
        </main>
    );
}

export default Login;