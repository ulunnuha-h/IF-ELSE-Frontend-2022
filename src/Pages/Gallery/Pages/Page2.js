import React from "react";
import './Page2.css';
import {ReactComponent as Bg} from '../../../Assets/Page2/Desert2.svg'
import Rangkaian1 from "../Components/Rangkaian1";
import Bg2 from '../../../Assets/Gallery/Page3/1.svg'
import { motion } from "framer-motion";

const Page2 = () => {

    return (
        <>
            <div className="container-lg position-absolute rangkaian-gallery" style={{zIndex:'10', marginTop: '20vh'}} >
                <Rangkaian1/>
            </div>

            <div className="px-2 w-100 d-flex align-items-end" style={{background:'linear-gradient(#451400,#F58000)',minHeight:'110vh'}} >
                <Bg className="position-absolute" style={{left:'0', zIndex:'1'}}/>
            </div>

            <div className="pt-5 d-flex justify-content-center align-items-end bg-coming" style={{minHeight: '300vh'}}>
                <section className="position-absolute w-100 bg-page2-gallery justify-content-center" style={{left:'0',backgroundImage:`url(${Bg2})`,backgroundSize:'cover', minHeight: '180vh'}}>
                    <motion.h2 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.3}} className="page2-gallery text-center " style={{zIndex:'1', marginTop:'40vh'}}>COMING SOON</motion.h2>
                </section>
            </div>
        </>
    );
}

export default Page2;