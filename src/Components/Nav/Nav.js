import React, { useContext, useState } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './Nav.css'
import pic from '../../Assets/Logo/logo-ifelse.png';
import { Auth } from "../../Config/Auth";
import { getMahasiswaByUserId } from "../../Data/Mahasiswa";

const Nav = () => {
    const nav = useNavigate();
    const loc = useLocation();
    const auth = useContext(Auth);
    const mhsData = getMahasiswaByUserId(parseInt(auth.getUserId())) ? getMahasiswaByUserId(parseInt(auth.getUserId())) : {Avatar : 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png'};
    let isMobile = (window.innerWidth < 576);
    let isHome = (loc.pathname.indexOf("home") !== -1 );
    let isProfile = (loc.pathname.indexOf("user") !== -1 );
    let [isTop,setIsTop] = useState(true);

    const closeSidebar = () => {
        const sidebar = document.getElementById('check');
        sidebar.checked = false;
    }

    const navStyle = {
        "transition":"100ms",
        "height":"76px",
        "position":((isHome || isProfile)? "fixed" : "sticky"),
        "backgroundColor":((isMobile || (isTop && (isHome || isProfile)) )? "":"var(--color-3)"),
        "color":((isTop && isProfile) ? "white":"var(--color-font)")
    }   

    const logoStyle = {
        "borderRadius":"50%",
        "backgroundColor":"var(--color-3)",
        "margin":"0px 5px"
    }

    const navTextStyle = {
        "color" : ((isTop && isProfile) ? "white":"var(--color-font)")
    }

    window.addEventListener("scroll",()=>{
        if(window.scrollY < 172) setIsTop(true);
        else setIsTop(false);
    });

    return(
        <nav className="navbar px-4 py-1 w-100" style={navStyle}>
            <div className="nav-brand h-100 d-flex" onClick={()=>{nav('/');closeSidebar()}}>
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
                    <Link className="nav-link" to="news" onClick={()=>{closeSidebar();window.scrollTo(0,0)}}>
                        <span className="nav-text" style={navTextStyle}>News</span>
                    </Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="faq" onClick={()=>{closeSidebar();window.scrollTo(0,0)}}>
                        <span className="nav-text" style={navTextStyle}>FAQ</span>
                    </Link>
                </li>
                <li className="nav-item mx-3" onClick={()=>{closeSidebar();window.scrollTo(0,0)}}>
                    <Link className="nav-link" to="task">
                        <span className="nav-text" style={navTextStyle}>Task</span>
                    </Link>
                </li>
                <li className="nav-item mx-3" onClick={()=>{closeSidebar();window.scrollTo(0,0)}}>
                    <Link className="nav-link" to="presence">
                        <span className="nav-text" style={navTextStyle}>Presence</span>
                    </Link>
                </li>
                <li className="nav-item mt-4 d-block d-sm-none" onClick={()=>{closeSidebar();window.scrollTo(0,0)}}>
                    {
                        !auth.isLogged() ? 
                            <Link className="nav-link mobile-button d-block d-sm-none" to="login" onClick={()=>{closeSidebar();window.scrollTo(0,0)}}>
                                <span className="nav-text">Login</span>
                            </Link> :
                            <Link className="nav-link mobile-button d-block d-sm-none" to="user" onClick={()=>{closeSidebar();window.scrollTo(0,0)}}>
                                <span className="nav-text">Profile</span>
                            </Link>
                    }
                    
                </li>
                <footer style={{"position":"absolute","bottom":"100px","textAlign":"center"}}>
                    Developed by IT x DDM IF ELSE &#169; 2022
                </footer>
            </ul>
            {!auth.isLogged() ? 
            <Link className="d-none d-sm-block" to="login" onClick={()=>{window.scrollTo(0,0)}}>
                <button className="btn-navlogin">Login</button>
            </Link> :
            <Link className="d-none d-sm-block" to="user" onClick={()=>{window.scrollTo(0,0)}}>
                <div className="nav-user-icon" style={{backgroundImage : `url(${mhsData.avatar})`}} />
            </Link>
            }
            
        </nav>
    );
}

export default Nav;