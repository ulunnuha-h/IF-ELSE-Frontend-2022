import React from "react";
import { motion } from "framer-motion";

export default function LogoPh(props) {
    return(
        <motion.div animate={{opacity:1}} initial={{opacity:0}} transition={{duration:0.3}} className="filosofi d-flex flex-column align-items-center p-lg-5 m-0 p-3">
            <img src={props.logo} alt="logo"/>
            <h2>/{props.filosofi}/</h2>
            <p>{props.desc}</p>
        </motion.div>
    )
}