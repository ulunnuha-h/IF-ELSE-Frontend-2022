import React, { useContext, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import './Nav.css'
import pic from '../../Assets/Logo/logo-ifelse.png';
import { Auth } from "../../Config/Auth";

const Nav = () => {
    const nav = useNavigate();
    const auth = useContext(Auth);
    useEffect(()=>{
        auth.cekLokal();
    });

    return(
        <nav className="navbar px-4 py-1" style={{"height":"76px","position":"sticky"}}>
            <div className="nav-brand h-100 d-flex" onClick={()=>nav('/')}>
                <img src={pic} alt='logo ifelse' className="h-100"></img>
                <section className="d-flex flex-column justify-content-center">
                    <span className="m-0 mt-1 p-0 h5" style={{"fontWeight":"700"}}>IF ELSE</span>
                    <span className="m-0 p-0 h4" style={{"fontWeight":"700"}}>2022</span>
                </section>
            </div>
            <input type="checkbox" id="check" className="d-none"></input>
            <label htmlFor="check" className="d-block d-sm-none" style={{"cursor":"pointer"}}>
                <i className="fas fa-bars"></i>
            </label>
            <ul className="navbar-nav">
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="news">
                        <span className="nav-text">News</span>
                    </Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="faq">
                        <span className="nav-text">FAQ</span>
                    </Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="task">
                        <span className="nav-text">Task</span>
                    </Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="presence">
                        <span className="nav-text">Presence</span>
                    </Link>
                </li>
                <li className="nav-item mt-4 d-block d-sm-none">
                    {
                        !auth.isLogged() ? 
                            <Link className="nav-link mobile-button d-block d-sm-none" to="login">
                                <span className="nav-text">Login</span>
                            </Link> :
                            <Link className="nav-link mobile-button d-block d-sm-none" to="user">
                                <span className="nav-text">Profile</span>
                            </Link>

                    }
                    
                </li>
                <footer style={{"position":"absolute","bottom":"100px","textAlign":"center"}}>
                    Developed by IT x DDM IF ELSE &#169; 2022
                </footer>
            </ul>
            {!auth.isLogged() ? 
            <Link className="d-none d-sm-block" to="login"><button className="btn-navlogin">Login</button></Link> :
            <Link className="d-none d-sm-block" to="user">
                <div className="nav-user-icon">
                    <img src={auth.getUserData().img} alt="propic" className="img-fluid"></img>
                </div>
            </Link>
            }
            
        </nav>
    );
}

export default Nav;