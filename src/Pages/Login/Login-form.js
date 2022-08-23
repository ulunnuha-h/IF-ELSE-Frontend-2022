import React, { useState } from "react";
import {Form, InputGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import { postMahasiswaLogin } from "../../Data/Mahasiswa";
import { Link, useNavigate } from "react-router-dom";
import { LoginLoading } from "./Login";

const LoginForm = () => {
    const nav = useNavigate();
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [errorMsg,setErrorMsg] = useState('');
    const [loading,setLoading] = useState(false);

    const login = () => {
        setLoading(true);
        postMahasiswaLogin(email,pass)
        .then(res => {
            if(res.success) {
                localStorage.setItem('token',res.data.token);
                nav('/user');
            }else setErrorMsg(res.response.data.message);
            setLoading(false);
        });
    }

    return(
        <> 
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
                        <h5 className="my-0">{ loading ? <LoginLoading/> :"LOGIN"}</h5>
                    </button>
                    <span className="text-center mt-4 register-link">Tidak punya akun ? tidak apa apa, tinggal <Link to="/mahasiswa/register">Register</Link> </span>
                </Form>
        </>
    );
}

export default LoginForm;