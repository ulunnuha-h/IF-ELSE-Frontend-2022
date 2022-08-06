import React from "react";
import SunLogo from '../../../Assets/Page4/Sun.svg';
import logo from '../../../Assets/Logo/logo-ifelse.png'
import bg from '../../../Assets/Page4/Desert4.svg'
import './Page1.css';
import './Page4.css';
import Philosophy from "./Components/Philoshopy";
import { motion } from "framer-motion";

const Page4 = () => {

    return(
        <main className="d-flex align-items-end pt-5" style={{background:'linear-gradient(#9C2E00,#D46500)'}}>
            <section className="position-absolute h-100 w-100" style={{left:'0',backgroundImage:`url(${bg})`,backgroundSize:'cover',zIndex:0,backgroundPosition:'center'}}/>
            <div className="container-lg">
                <h2 className="judul text-center">LOGO PHILOSOPHY</h2>
                <div className="the-filosofi row m-0">
                    <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center p-0">
                        <Philosophy/>
                    </div>
                    <div className="position-relative col-7 d-none d-lg-flex justify-content-center align-items-center pb-5 mb-5" style={{backgroundImage:`url(${SunLogo})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                        <motion.img initial={{opacity:0,scale:0.7}} 
                            whileInView={{opacity:1,scale:1}} 
                            transition={{duration:0.5,type:'tween',ease:'circOut',delay:0.1}}  
                            src={logo} 
                            style={{width:'40%',zIndex:'2'}}/>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page4;