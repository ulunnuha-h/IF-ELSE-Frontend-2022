import React from "react";
import './Page1.css';
import Pl1 from '../../../Assets/Gallery/Page3/1.svg'
import { motion } from "framer-motion";
import About from "../../Home/Pages/Components/AboutIfElse";
import './Page3.css'
import Rangkaian3 from "../Components/Rangkaian3";

const Page3 = () => {
    return(
        <>
            {/* <div className="px-2 pt-5 w-100 d-flex align-items-end justify-content-center bg-coming" style={{height: '230vh', overflow: 'hidden'}}>
                <img className='position-absolute w-100' style={{zIndex:'0', marginTop: '100vh', paddingBottom: '70vh'}} src={Pl1} alt="pic"></img>
                <motion.h2 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.3}} className="page3-gallery text-center">COMING SOON</motion.h2>
            </div> */}
            <div className="pt-5 d-flex align-items-end justify-content-center bg-coming" style={{minHeight: '160vh'}}>
                <section className="position-absolute h-100 w-100" style={{left:'0',backgroundImage:`url(${Pl1})`,backgroundSize:'cover',zIndex:0}}/>
                <motion.h2 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.3}} className="page3-judul text-center">COMING SOON</motion.h2>
            </div>
        </>
    );
}

export default Page3;