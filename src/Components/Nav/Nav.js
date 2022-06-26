import React from "react";
import {Link} from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return(
        <nav className="navbar py-2 px-5 bg-primary" style={{"height":"76px"}}>
            <Link className="navbar-brand h-50 p-0 m-0" style={{"width":"60px"}} to="/">
                <div className="p-0 m-0">Logo</div>
            </Link>
            <input type="checkbox" id="check"></input>
            <label htmlFor="check" className="checkbtn">
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
                    <Link className="nav-link" to="tasks">
                        <span className="nav-text">Tasks</span>
                    </Link>
                </li>
                <li className="nav-item mx-3">
                    <Link className="nav-link" to="presence">
                        <span className="nav-text">Presence</span>
                    </Link>
                </li>
                <li>
                    <button className="mobile-button">Login</button>
                </li>
            </ul>
            <button className="btn-navlogin">Login</button>
        </nav>
    );
}

export default Nav;