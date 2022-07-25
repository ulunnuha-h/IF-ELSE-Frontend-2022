import { motion } from "framer-motion";
import React, { useContext } from "react";
import './PendampingCard.css';
import { Auth } from "../../Config/Auth";
import { getMahasiswaByUserId } from "../../Data/Mahasiswa";
import { getKelompokById } from "../../Data/Kelompok";

const PendampingCard = () => {
    const userId = parseInt(useContext(Auth).getUserId());
    const mhs = getMahasiswaByUserId(userId);
    const kelompok = (mhs.GroupId ? getKelompokById(mhs.GroupId) : {pendamping : "tidak ada",line:"tidak ada",link : "#",img:""})
    return(
        <motion.div
            className="pendamping-card row p-3" 
            style={{"width": "90%","borderRadius":"12px"}}
            initial={{rotateY:90}}
            whileInView={{rotateY:0}}
            transition={{duration:0.5}}>
            <div className="col-md-3 p-0 align-self-start rounded" style={{backgroundImage:`url(${kelompok.img})`,backgroundSize:"cover",aspectRatio:"1/1"}}/>
            <div className="col-md-9 d-flex flex-column" >
                <h5 className="mt-3">Name</h5>
                <span className="mx-3">{kelompok.pendamping}</span>
                <h5 className="mt-3">ID Line</h5>
                <span className="mx-3">{kelompok.line}</span>
                <a className="align-self-end" href={kelompok.link} target="blank"><motion.button whileHover={{scale:1.05}} className="btn-pendamping mt-3 px-4 py-2">Link Grup</motion.button></a>
            </div>
        </motion.div>
    );
}

export default PendampingCard;