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
                className={loc.indexOf('home') !== -1 ? "position-absolute rounded text-white d-none d-lg-block":"d-none"} 
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
                            <div className="h-75 d-flex flex-column justify-content-between align-items-center align-items-lg-start">
                                <span className="footer-link" onClick={()=> {nav("/");window.scroll(0,0)}}>Home</span>
                                <span className="footer-link" onClick={()=> {nav("news");;window.scroll(0,0)}}>News</span>
                                <span className="footer-link" onClick={()=> {nav("faq");;window.scroll(0,0)}}>FAQ</span>
                                <span className="footer-link" onClick={()=> {nav("task");;window.scroll(0,0)}}>Task</span>
                                <span className="footer-link" onClick={()=> {nav("gallery");;window.scroll(0,0)}}>Gallery</span>
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
                                    <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=yls8148q" target="blank"><i className="fa-brands fa-line "/></a>
                                    <a href="https://wa.me/message/3IB7ZNIUYCIHA1" target="blank"><i className="fa-brands fa-whatsapp-square"/></a>
                                    <a href="https://www.instagram.com/ifelsefilkomub/" target="blank"><i className="fa-brands fa-instagram-square"/></a>
                                    <a href="https://www.youtube.com/channel/UCaAZt3JB9xgqj7xRosdtsig" target="blank"><i className="fa-brands fa-youtube-square"/></a>
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