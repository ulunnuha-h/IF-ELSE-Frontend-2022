import React, { useContext, useEffect, useState } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './Nav.css'
import pic from '../../Assets/Logo/logo-ifelse.png';
import { Auth } from "../../Config/Auth";
import { motion } from "framer-motion";

const Nav = () => {
    const nav = useNavigate();
    const auth = useContext(Auth);
    const [trans,setTrans] = useState(false);

    const loc = useLocation();

    const navStyle = {
        "height":"76px",
        "position":(trans ? "fixed":"sticky"),
        "backgroundColor":(trans ? "":"var(--color-3)"),
        "color":(trans ? "white":"var(--color-font)")
    }

    const logoStyle = {
        "borderRadius":"50%",
        "backgroundColor":"var(--color-3)",
        "margin":"0px 5px"
    }

    useEffect(()=>{
        auth.cekLokal();
        if(loc.pathname.indexOf("user") !== -1) setTrans(true);
        else setTrans(false);
        console.log(trans);
    },[auth,trans,loc]);

    return(
        <nav className="navbar px-4 py-1 w-100" style={navStyle}>
            <div className="nav-brand h-100 d-flex" onClick={()=>nav('/')}>
                <img src={pic} alt='logo ifelse' className="h-100" style={logoStyle}></img>
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
            <Link className="d-none d-sm-block" to="login">
                <motion.button whileHover={{scale:1.05}} className="btn-navlogin">Login</motion.button>
            </Link> :
            <Link className="d-none d-sm-block" to="user">
                <div className="nav-user-icon">
                    <motion.img whileHover={{scale:1.2, opacity:0.8}} src={auth.getUserData().img} alt="propic" className="img-fluid"></motion.img>
                </div>
            </Link>
            }
            
        </nav>
    );
}

export default Nav;