import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Footer.css'
import logo from '../../Assets/Logo/logo-ifelse.png';

const Footer = () => {
    const loc = useLocation().pathname;
    const nav = useNavigate();

    return(
        <div className="w-100 footer">
            <section style={{"height":"5px","background":"var(--color-4)"}}></section>
            <button
                className={loc.indexOf('home') !== -1 ? "position-absolute rounded text-white":"d-none"} 
                style={{
                    bottom : '10vh',
                    left:'2vw',
                    width:'50px',
                    height:'50px',
                    backgroundColor:'var(--color-1-p)',
                    border:'0px'}} 
                onClick={()=>window.scrollTo(0,0)}>
                <i className="fa-solid fa-angle-up"></i>
            </button>
            <div className="container-lg">
                <div className="row row-cols-1 row-cols-md-3 p-3">
                    <div className="col d-flex flex-column justify-content-center">
                        <section className="d-flex align-items-center icon-ifelse mb-3">
                            <img src={logo} alt="logo ifelse" style={{"height":"120px"}}></img>
                            <div className="pt-2">
                                <h1 style={{"fontFamily":"'Montserrat', sans-serif","fontWeight":"bold"}}>IF ELSE</h1>
                                <h2 style={{"fontFamily":"'Montserrat', sans-serif","fontWeight":"bold"}}>2022</h2>
                            </div>
                        </section>
                        <span className="text-center">Developed by IT x DDM IF ELSE &#169; 2022</span>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <section>
                            <h3 style={{"fontFamily":"'Montserrat', sans-serif","fontWeight":"bold"}}>Get Started</h3>
                            <div className="h-75 d-flex flex-column justify-content-between">
                                <span className="footer-link" onClick={()=> nav("/")}>Home</span>
                                <span className="footer-link" onClick={()=> nav("news")}>News</span>
                                <span className="footer-link" onClick={()=> nav("faq")}>FAQ</span>
                                <span className="footer-link" onClick={()=> nav("task")}>Task</span>
                            </div>
                        </section>
                    </div>
                    <div className="col h-100 d-flex justify-content-center">
                        <section>
                            <h3 style={{"fontFamily":"'Montserrat', sans-serif","fontWeight":"bold"}}>Get In Touch</h3>
                            <div className="d-flex flex-column">
                                <span>Teknik Informatika</span>
                                <span>Fakultas Ilmu Komputer</span>
                                <span>Universitas Brawijaya</span>
                                <span>Jl. Veteran No. 8 Malang, Indonesia</span>
                                <div className="link-icon">
                                    <i className="fa-brands fa-line "></i>
                                    <i className="fa-brands fa-whatsapp-square"></i>
                                    <i className="fa-brands fa-instagram-square"></i>
                                    <i className="fa-solid fa-square-envelope"></i>
                                    <i className="fa-solid fa-square-phone"></i>
                                    <i className="fa-solid fa-square"></i>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Footer;