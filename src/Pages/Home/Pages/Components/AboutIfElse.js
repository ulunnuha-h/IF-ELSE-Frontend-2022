import React from "react";
import '../Page3.css'
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';

export default function About() {
    return(
        <div className="container-lg d-flex align-items-center flex-column justify-content-center" style={{minHeight:'100vh'}}>
            <motion.h2 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.3}} className="page3-judul">ABOUT IF ELSE</motion.h2>
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={3}>
                <motion.p initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{duration:0.3,type:'tween',ease:'circOut'}} className="page3-aboutUs text-light p-4 p-lg-5 mx-0 mx-lg-5">
                    IF ELSE (Informatics Education and Learning for Society Enhancement) merupakan sebuah acara PROBINMABA (Program Pembinaan Mahasiswa Baru) bagi mahasiswa baru sebagai sarana pengenalan terhadap program studi Teknik Informatika FILKOM UB. IF ELSE ini juga berisikan serangkaian kegiatan pembinaan yang digunakan sebagai sarana Mahasiswa Teknik Informatika angkatan 2021 dalam mengembangkan nilai – nilai positif baik dalam aspek akademis maupun non akademis, serta menjadi kegiatan pembinaan lebih lanjut dalam pembentukan kader-kader berkualitas bagi kebutuhan seluruh elemen HMIF FILKOM UB.
                </motion.p>
            </Tilt>
        </div>
    )
}