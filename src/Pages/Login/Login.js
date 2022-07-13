import React , { useContext, useState } from "react";
import './Login.css';
import { Auth } from "../../Config/Auth";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const [errorMsg,setErrorMsg] = useState('');

    const auth = useContext(Auth);

    const login = () => {
        if(email !== '' && pass !== ''){
            auth.login(email,pass);
            setErrorMsg(auth.errMsg);
        }else{
            setErrorMsg('Lho kok kolomnya kosong ? kaya hati aku :(');
        }
    }
    if(auth.isLogged()){
        return <Navigate to='/user'></Navigate>
    }
    else return(
        <motion.div initial={{scale:1.1,opacity:0}} animate={{scale:1,opacity:1}} className="login-page row m-auto container-lg">
            <div className="col-md-7 col-12 login-image d-flex align-items-center justify-content-center">
                <div>this is image</div>
            </div>
            <div className="col-md-5 col-12 m-auto">
                <div className=" d-flex h-100 flex-column ">
                        <section className="d-flex align-items-center justify-content-center mb-5 login-logo">
                            <div className="bg-dark m-2" style={{"height":"100px","width":"100px","borderRadius":"100px"}}></div>
                            <div>
                                <h2>IF ELSE</h2>
                                <h4>2022</h4>
                            </div>
                        </section>
                        <h1 className="mb-4">Welcome !</h1>
                        {errorMsg === '' ? null : 
                        <div className="alert alert-danger" role="alert">
                            {errorMsg}
                        </div>
                        }
                        
                        <label htmlFor="email" className="form-label">Email</label>
                        <div className="input-group mb-3">
                            <input 
                                id="email"
                                onChange={(e)=> setEmail(e.target.value)} 
                                type="text" 
                                className="form-control" 
                                placeholder="Email" 
                                required />
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa-solid fa-at"></i>
                            </span>
                        </div>

                        <label htmlFor="pass" className="form-label">Password</label>
                        <div className="input-group mb-3">
                            <input 
                                id="pass"
                                onChange={(e)=> setPass(e.target.value)} 
                                type="password" 
                                className="form-control" 
                                placeholder="Password" 
                                required/>
                            <span className="input-group-text" id="basic-addon1">
                                <i className="fa-solid fa-lock"></i>
                            </span>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={login}>Login</button>
                        
                </div>
            </div>
        </motion.div>
    );
}

export default Login;