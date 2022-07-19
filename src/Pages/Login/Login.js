import React , { useContext, useState } from "react";
import './Login.css';
import { Auth } from "../../Config/Auth";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../../Assets/login-bg.jpg";
import logo from "../../Assets/Logo/logo-ifelse.png"

const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const [errorMsg,setErrorMsg] = useState('');

    const auth = useContext(Auth);

    const login = (event) => {
        event.preventDefault();
        auth.login(email,pass);
        setErrorMsg(auth.errMsg);
    }

    if(auth.isLogged()){
        return <Navigate to='/user'></Navigate>
    }
    else return(
        <motion.div 
            animate={{opacity:1}} 
            initial={{opacity:0}} 
            className="login-page row m-auto container-lg">
            <div className="col-md-6 col-12 login-image d-flex align-items-center">
                <div className="px-5 align-self-center m-4">
                    <motion.img initial={{scale:0.7}} animate={{scale:1}} transition={{type:"tween"}} src={logo} alt="logoifelse" className="img-fluid" style={{"borderRadius":"50%","backgroundColor":"var(--color-3)"}}></motion.img>
                </div>
            </div>
            <div className="col-md-6 col-12 m-auto">
                <div className=" d-flex h-100 flex-column ">
                        <h1 className="display-1 mx-4" style={{"fontFamily": "'Bebas Neue', cursive","color":"var(--color-1-p)"}}>Welcome !</h1>
                        {errorMsg === '' ? null : 
                        <div className="alert alert-danger" role="alert">
                            <i className="fa-solid fa-triangle-exclamation me-3"></i>
                            {errorMsg}
                        </div>}
                        <form className="login-form mx-4">
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label ms-3 h5">Email</label>
                                <div className="input-group flex-nowrap">
                                    <input 
                                        type="email" 
                                        className="form-control login-input" 
                                        placeholder="Email" 
                                        aria-label="Email" 
                                        aria-describedby="addon-wrapping" 
                                        id="inputEmail" 
                                        value={email}
                                        onChange={(e)=>setEmail(e.target.value)}
                                        required />
                                    <span className="input-group-text login-input">
                                        <i className="fa-solid fa-at"></i>
                                    </span>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="inputPassword" className="form-label ms-3 h5">Password</label>
                                <div className="input-group flex-nowrap">
                                    <input 
                                        type="password" 
                                        className="form-control login-input" 
                                        placeholder="Password" 
                                        aria-label="Password" 
                                        aria-describedby="addon-wrapping" 
                                        id="inputPassword" 
                                        value={pass}
                                        onChange={(e)=>setPass(e.target.value)}
                                        required />
                                    <span className="input-group-text login-input">
                                        <i className="fa-solid fa-lock"></i>
                                    </span>
                                </div>
                            </div>                              
                            <div className="w-100 d-flex justify-content-center">
                                <button type="submit" className="login-btn mt-3 px-5 py-2" onClick={(e)=>login(e)}>
                                    <h5 className="m-0">LOGIN</h5>
                                </button>
                            </div>
                            
                        </form>
                </div>
            </div>
            
            <div className="login-bg" style={{"backgroundImage":`url(${bg})`}}>
            </div>
        </motion.div>
    );
}

export default Login;