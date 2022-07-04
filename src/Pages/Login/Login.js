import React from "react";
import './Login.css';

const Login = () => {
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
                        <label for="login-email" className="form-label h5 mx-3">Email</label>
                        <div class="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Email" id="login-email"/>
                            <span class="input-group-text">
                                <i class="fa-solid fa-at"></i>
                            </span>
                        </div>

                        <label for="login-email" className="form-label h5 mx-3">Password</label>
                        <div class="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Password"/>
                            <span class="input-group-text">
                                <i class="fa-solid fa-lock"></i>
                            </span>
                        </div>
                        <button type="button" class="btn btn-primary">Login</button>
                </div>
            </div>
        </div>
    );
}

export default Login;