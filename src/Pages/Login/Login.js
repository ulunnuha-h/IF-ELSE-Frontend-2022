import React , { useContext, useState } from "react";
import './Login.css';
import { Auth } from "../../Config/Auth";
import { motion } from "framer-motion";
import bg from "../../Assets/login-bg.jpg";
import logo from "../../Assets/Logo/logo-ifelse.png"
import {Form, InputGroup } from "react-bootstrap";

const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    const [errorMsg,setErrorMsg] = useState('');

    const auth = useContext(Auth);

    const login = () => {
        // auth.signIn(email,pass);
        setErrorMsg(auth.userLogin(email,pass));
    }
    
    return(
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
                </div>
                {errorMsg !== '' ? 
                <motion.div initial={{scale:0.5}} animate={{scale:1}} className="alert alert-danger p-2 w-75 mb-2 m-auto text-center">
                    <i className="fa-solid fa-triangle-exclamation me-2"></i>
                    {errorMsg}
                </motion.div>                    
                 : null}
                <Form className="login-form px-3 d-flex flex-column" onSubmit={e=>{e.preventDefault();login()}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="ms-4 h5">Email</Form.Label>
                        <InputGroup>
                            <Form.Control className="login-input" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                            <InputGroup.Text className="login-input"><i className="fa-solid fa-at"></i></InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="ms-4 h5">Password</Form.Label>
                        <InputGroup>
                            <Form.Control className="login-input" placeholder="Password" type="password" value={pass} onChange={e=>setPass(e.target.value)} required/>
                            <InputGroup.Text className="login-input"><i className="fa-solid fa-lock"></i></InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <button className="login-btn px-5 py-2 align-self-center" type="submit">
                        <h5 className="my-0">LOGIN</h5>
                    </button>
                </Form>
            </div>
            
            <div className="login-bg" style={{"backgroundImage":`url(${bg})`}}>
            </div>
        </motion.div>
    );
}

export default Login;