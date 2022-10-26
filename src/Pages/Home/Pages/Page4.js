import React from "react";
import SunLogo from '../../../Assets/Page4/Sun.svg';
import logo from '../../../Assets/Logo/logo-ifelse.png'
import bg from '../../../Assets/Page4/Desert4.svg'
import './Page1.css';
import './Page4.css';
import Philosophy from "./Components/Philoshopy";
import { motion } from "framer-motion";
import { useParallax } from "react-scroll-parallax";

const isMobile = (window.innerWidth < 768);

const Page4 = () => {

    const effect = useParallax({
        scale:[1,1.3],
        disabled: isMobile
    })


    return(
        <main className="d-flex align-items-end pt-5" style={{background:'linear-gradient(#9C2E00,#D46500)'}}>
            <section className="position-absolute h-100 w-100" style={{left:'0',backgroundImage:`url(${bg})`,backgroundSize:'cover',zIndex:0,backgroundPosition:'center'}}/>
            <div className="container-lg">
                <motion.h2 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.3}} className="judul text-center position-relative" style={{zIndex:'2'}}>LOGO PHILOSOPHY</motion.h2>
                <div className="the-filosofi row m-0">
                    <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center p-0">
                        <Philosophy/>
                    </div>
                    <div ref={effect.ref} className="position-relative col-7 d-none d-lg-flex justify-content-center align-items-center pb-5 mb-5" style={{backgroundImage:`url(${SunLogo})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>
                        <motion.img initial={{opacity:0}} 
                            whileInView={{opacity:1,scale:0.85}} 
                            transition={{duration:0.5,type:'tween',ease:'circOut',delay:0.1}}  
                            src={logo} 
                            style={{width:'250px',zIndex:'2'}}
                            className="mt-3"
                            />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Page4;