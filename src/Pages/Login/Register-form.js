import React, { useState } from "react";
import {Form} from "react-bootstrap";
import { motion } from "framer-motion";
import Table from "react-bootstrap/esm/Table";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const nav = useNavigate();
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [nim,setNim] = useState('');
    const [password,setPassword] = useState('');
    const [errorMsg,setErrorMsg] = useState('');
    const [success,setSuccess] = useState(false);

    const registering = e => {
        e.preventDefault();
        console.log({name,username,email,nim,password});
        setSuccess(true);
    }

    const lanjut = () =>{
        setSuccess(false);setName('');setUsername('');setEmail('');
        setPassword('');setNim('');
        nav('/mahasiswa/login');
    }

    if(success) return(
        <motion.div initial={{scale:0.5,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.5,type:"tween",ease:'backOut'}} className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-success">Registrasi Mengsukses <i className="fa-solid fa-circle-check"/></h1>
            <h6 className="text-success">Akun anda sudah dibuat, yeay !</h6>
            <button className="btn-toggle p-2 my-2" onClick={lanjut}>Lanjut</button>
        </motion.div>
    )

    return(
        <>
                <div className=" d-flex h-100 flex-column mt-5 mt-lg-0">
                        <h1 className="display-3 m-auto" style={{"fontFamily": "'Bebas Neue', cursive","color":"var(--color-1-p)"}}>Register Account</h1>
                </div>
                {errorMsg !== '' ? 
                <motion.div initial={{scale:0.5}} animate={{scale:1}} className="alert alert-danger p-2 w-75 mb-2 m-auto text-center">
                    <i className="fa-solid fa-triangle-exclamation me-2"></i>
                    {errorMsg}
                </motion.div>                    
                 : null}
                <Form className="login-form px-0 px-lg-3 d-flex flex-column" onSubmit={registering}>
                    <Table className="register-table px-0 mx-0">
                    <tbody>
                        <tr>
                            <td className="col-1 m-auto py-2">Name</td>
                            <td>
                                <Form.Control className="register-input" placeholder="Input nama..." type="text" required value={name} onChange={e=>setName(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-1 m-auto py-2">Username</td>
                            <td>
                                <Form.Control className="register-input" placeholder="Input username..." type="text" required value={username} onChange={e=>setUsername(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-1 m-auto py-2">Email</td>
                            <td>
                                <Form.Control className="register-input" placeholder="Input email..." type="email" value={email} onChange={e=>setEmail(e.target.value)} required/>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-1 m-auto py-2">NIM</td>
                            <td>
                                <Form.Control className="register-input" placeholder="Input NIM..." type="text" required value={nim} onChange={e=>setNim(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td className="col-1 m-auto py-2">Password</td>
                            <td>
                                <Form.Control className="register-input" placeholder="Input password..." type="password" required value={password} onChange={e=>setPassword(e.target.value)}/>
                            </td>
                        </tr>
                    </tbody>
                    </Table>
                    <button className="login-btn px-5 py-2 align-self-center" type="submit">
                        <h5 className="my-0">REGISTER</h5>
                    </button>
                    <span className="text-center mt-4 register-link">Sudah punya akun ? langsung saja <Link to="/mahasiswa/login">Login</Link> </span>
                </Form>
        </>
    );
}

export default RegisterForm;