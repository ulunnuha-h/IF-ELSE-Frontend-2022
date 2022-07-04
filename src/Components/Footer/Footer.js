import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
    return(
        <div className="w-100 bg-primary footer">
            <div className="container-lg">
                <div className="row row-cols-1 row-cols-md-3 p-3">
                    <div className="col">
                        <section className="d-flex align-items-center icon-ifelse">
                            <div className="bg-dark m-2" style={{"height":"100px","width":"100px","borderRadius":"100px"}}></div>
                            <div>
                                <h2>IF ELSE</h2>
                                <h4>2022</h4>
                            </div>
                        </section>
                        <span className="text-center">Developep by IT x DDM IF ELSE &#169; 2022</span>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <section>
                            <h4>Get Started</h4>
                            <div className="h-75 d-flex flex-column justify-content-between">
                                <Link to="/"><span className="footer-link">Home</span></Link>
                                <Link to="/news"><span className="footer-link">News</span></Link>
                                <Link to="/faq"><span className="footer-link">FAQ</span></Link>
                                <Link to="/task"><span className="footer-link">Task</span></Link>
                            </div>
                        </section>
                    </div>
                    <div className="col h-100 d-flex justify-content-center">
                        <section>
                            <h4>Get In Touch</h4>
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