import React, { useState } from "react";
import { Card,Form,Button } from "react-bootstrap";

const AdminLogin = (props) => {

    const [errMsg,setErrMsg] = useState('');
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');

    const login = (e) => {
        e.preventDefault();
        if(user ==='admin' && pass==='admin'){
            setErrMsg('');
            props.login();
        }
        else{
            setErrMsg('Salah paswot woi !');
        }

    }

    return(
        <div className="d-flex align-items-center flex-column justify-content-center bg-dark" style={{"height":"100vh"}}>
            {errMsg === '' ? null : 
                    <span className="alert alert-danger" role="alert">
                    <i className="fa-solid fa-triangle-exclamation me-2"></i>
                        {errMsg}
                    </span>}
            <Card className="mx-3 w-75">
                <Card.Header className="p-4">
                    <h3 className="m-0">Login</h3>
                    <span>Sign In to your account</span>
                </Card.Header>
                <Card.Body className="p-4">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicTe xt">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" value={user} onChange={(e)=>setUser(e.target.value)}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={(e)=>login(e)}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AdminLogin;