import React from "react";
import { Card,Form,Button } from "react-bootstrap";

const AdminLogin = () => {
    return(
        <div className="d-flex align-items-center bg-dark" style={{"height":"100vh"}}>
            <Card className="m-auto w-75">
                <Card.Header className="p-4">
                    <h3 className="m-0">Login</h3>
                    <span>Sign In to your account</span>
                </Card.Header>
                <Card.Body className="p-4">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default AdminLogin;