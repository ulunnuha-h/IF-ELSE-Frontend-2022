import React, { useState } from "react";
import { Card,Form,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { postMahasiswaLogin } from "../../Data/Mahasiswa";

const AdminLogin = () => {
    const nav = useNavigate();
    const [errMsg,setErrMsg] = useState('');
    const [user,setUser] = useState('');
    const [pass,setPass] = useState('');

    const login = () => {
        postMahasiswaLogin(user,pass)
        .then(res => {
            if(res.success){
                setErrMsg('');
                if(res.data.IsAdmin){
                    localStorage.setItem('adminToken',res.data.token);
                    localStorage.setItem('user',res.data.username);
                    nav('');
                }else{
                    setErrMsg("Kamu bukan admin deck 🤬")
                }
                
            } 
            else {
                setErrMsg(res.message);
            }
        });
    }

    return(
        <div className="d-flex align-items-center flex-column justify-content-center bg-dark" style={{"height":"100vh"}}>
            {errMsg === '' ? null : 
                    <span className="alert alert-danger" role="alert">
                    <i className="fa-solid fa-triangle-exclamation me-2"></i>
                        {errMsg}
                    </span>}
            <Card className="mx-1">
                <Card.Header className="px-5 py-4 d-flex flex-column">
                    <h3 className="m-auto">LOGIN</h3>
                    <span className="m-auto">Sign In to your account</span>
                </Card.Header>
                <Card.Body className="px-4">
                    <Form onSubmit={e=>{e.preventDefault();login()}}>
                        <Form.Group className="mb-3" controlId="formBasicTe xt">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Username" value={user} onChange={(e)=>setUser(e.target.value)} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)} required/>
                        </Form.Group>
                        <section className="d-flex justify-content-center flex-column">
                        <Button variant="primary" type="submit" className=" m-auto px-5">
                            Login
                        </Button>
                        <span className="m-auto mt-2" style={{"fontSize":"9px"}}>Lupa password ? tanya temennya</span>
                        </section>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AdminLogin;