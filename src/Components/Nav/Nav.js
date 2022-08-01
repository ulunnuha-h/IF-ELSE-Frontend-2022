import React, { useState,useCallback, useMemo } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import './Nav.css'
import pic from '../../Assets/Logo/logo-ifelse.png';
import { useAuth } from "../../Config/Auth";
import { getMahasiswaByUserId } from "../../Data/Mahasiswa";
import _debounce from "lodash/debounce";

const Nav = () => {
    const nav = useNavigate();
    const loc = useLocation();
    const {auth} = useAuth();
    const mhsData = auth.id ? 
        getMahasiswaByUserId(auth.id) : 
        {Avatar : 'https://divedigital.id/wp-content/uploads/2021/10/1-min.png'};
    const isMobile = (window.innerWidth < 576);
    const isHome = (loc.pathname.indexOf("home") !== -1 );
    const isProfile = (loc.pathname.indexOf("user") !== -1 );
    const [isTop,setIsTop] = useState(true);

    const closeSidebar = () => {
        const sidebar = document.getElementById('check');
        sidebar.checked = false;
        window.scrollTo(0,0);
    }

    const navHome = () => nav('/');

    const navStyle = useMemo(()=>{return{
        "zIndex":'11',
        "transition":"100ms",
        "height":"76px",
        "position":((isHome || isProfile)? "fixed" : "sticky"),
        "backgroundColor":((!isMobile && (isTop && (isHome || isProfile)) )? "":"var(--color-3)"),
        "color":((isTop && isProfile) && !isMobile ? "white":"var(--color-font)")
    }},[isHome,isProfile,isTop,isMobile]);

    const navTextStyle = {
        "color" : ((isTop && isProfile) && !isMobile ? "white":"var(--color-font)")
    }

    const cekScroll = useCallback(
        _debounce(() => {
            if(window.scrollY < 162) setIsTop(true);
            else setIsTop(false);
        }, 150), []);

    document.addEventListener("scroll",cekScroll);
    
    return(
        <nav className="navbar px-4 py-1 w-100" style={navStyle}>
            <div className="nav-brand cursor-pointer h-100 d-flex" onClick={navHome}>
                <img src={pic} alt='logo ifelse' className="h-100 me-2"></img>
                <section className="d-flex flex-column justify-content-center">
                    <span className="m-0 mt-1 p-0 h5">IF ELSE</span>
                    <span className="m-0 p-0 h4">2022</span>
                </section>
            </div>
            <input type="checkbox" id="check" className="d-none"></input>
            <label htmlFor="check" className="d-block d-sm-none cursor-pointer">
                <i className="fas fa-bars"></i>
            </label>
            <ul className="navbar-nav">
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="news" onClick={closeSidebar}>
                        <span className="nav-text" style={navTextStyle}>News</span>
                    </Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="faq" onClick={closeSidebar}>
                        <span className="nav-text" style={navTextStyle}>FAQ</span>
                    </Link>
                </li>
                <li className="nav-item mx-3" onClick={closeSidebar}>
                    <Link className="nav-link" to="task">
                        <span className="nav-text" style={navTextStyle}>Task</span>
                    </Link>
                </li>
                <li className="nav-item mx-3" onClick={closeSidebar}>
                    <Link className="nav-link" to="event">
                        <span className="nav-text" style={navTextStyle}>Event</span>
                    </Link>
                </li>
                <li className="nav-item mt-4 d-block d-sm-none" onClick={closeSidebar}>
                    {
                        !auth.isLogged ? 
                            <Link className="nav-link mobile-button d-block d-sm-none" to="login" onClick={closeSidebar}>
                                <span className="nav-text">Login</span>
                            </Link> :
                            <Link className="nav-link mobile-button d-block d-sm-none" to="user" onClick={closeSidebar}>
                                <span className="nav-text">Profile</span>
                            </Link>
                    }
                    
                </li>
                <footer className="position-absolute text-center">
                    Developed by IT x DDM IF ELSE &#169; 2022
                </footer>
            </ul>
            {!auth.isLogged ? 
            <Link className="d-none d-sm-block" to="login" onClick={closeSidebar}>
                <button className="btn-navlogin">Login</button>
            </Link> :
            <Link className="d-none d-sm-block" to="user" onClick={closeSidebar}>
                <div className="nav-user-icon" style={{backgroundImage : `url(${mhsData.avatar})`}} />
            </Link>
            }
            
        </nav>
    );
}

export default Nav;