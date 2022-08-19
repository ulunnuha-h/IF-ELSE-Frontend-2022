import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
import Gambar from './Gambar.svg'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt';

function Contact() {
    return (        
        <motion.div 
            initial={{rotateY:90,opacity:0}}
            animate={{rotateY:0,opacity:1}}
            transition={{duration:0.6,type:'tween',ease:'circOut',delay:0.1}}
            className="contact-table d-flex flex-column align-items-center py-4 my-3 px-3">
            <img  src={Gambar} className="w-75" alt="contact-logo"/>
            <div className="text-contact text-light mt-3">
                <p>Have another questions?</p>
            </div>
            <Link to="/narahubung" className="button-contact px-3 py-1">
                <p className='m-0'>Contact Us</p>
            </Link>
        </motion.div>
    )
}

export default Contact