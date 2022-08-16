import React from "react";
import bg from '../../../Assets/Page4/Desert4.svg'
import Rangkaians from "./Components/Rangkaians";
import { motion } from "framer-motion";

const Page5 = () => {

    return(
        <main className="d-flex align-items-end pt-5" style={{background:'linear-gradient(#451400 0%,#F58000 35%)',minHeight:'110vh'}}>
            <section className="position-absolute h-100 w-100" style={{left:'0',backgroundImage:`url(${bg})`,backgroundSize:'cover',zIndex:0,backgroundPosition:'center'}}/>
            <div className="container-lg px-0 pb-5 align-self-center" style={{zIndex:'1'}}>
                <motion.h2 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.3}} className="judul text-center">RANGKAIAN IF ELSE 2022</motion.h2>
                <motion.div initial={{y:100}} whileInView={{y:0}} transition={{duration:0.3}}>
                    <Rangkaians/>
                </motion.div>
            </div>
        </main>
    );
}

export default Page5;