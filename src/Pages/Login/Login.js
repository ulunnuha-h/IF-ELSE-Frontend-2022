import React , { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Login.css';

const Login = () => {
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');

    return(
        <div className="login-page row m-auto container-lg">
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
                        <Form.Label htmlFor="email" className="h5 mx-4">Email</Form.Label>
                        <InputGroup className="mb-3">                
                            <Form.Control
                                id="email"
                                value={email}
                                placeholder="Email"
                                aria-label="Email"
                                aria-describedby="basic-addon1"
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <InputGroup.Text id="basic-addon1">
                                <i class="fa-solid fa-at"></i>
                            </InputGroup.Text>
                        </InputGroup>

                        <Form.Label htmlFor="pass" className="h5 mx-4">Password</Form.Label>
                        <InputGroup className="mb-3">
                            <Form.Control
                                id="pass"
                                value={pass}
                                onChange={(e)=>setPass(e.target.value)}
                                placeholder="password"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                type="password"
                            />
                            <InputGroup.Text id="basic-addon1">
                                <i class="fa-solid fa-lock"></i>
                            </InputGroup.Text>
                        </InputGroup>
                        <button type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;