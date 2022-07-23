import React, { useContext } from "react";
import './UserCard.css'
import { motion } from "framer-motion";
import { getMahasiswaByNIM } from "../../Data/Mahasiswa";
import { Auth } from "../../Config/Auth";

const UserCard = () => {
    const nim = parseInt(useContext(Auth).getNim());
    const userData = (getMahasiswaByNIM(nim) ? getMahasiswaByNIM(nim):{nickName : "tidak ada",aboutMe :"tidak ada", img : "https://divedigital.id/wp-content/uploads/2021/10/1-min.png"} );

    return(
        <motion.div 
            initial={{y:-1000,opacity:0}} 
            animate={{y:0,opacity:1}} 
            whileHover={{scale:1.02}} 
            transition={{type:"tween",duration:0.5,ease:"circOut"}} 
            className="user-card d-flex flex-column align-items-center justify-content-between">
            <div className="user-image">
                <img src={userData.img} alt="profilepicture" className="img-fluid"></img>
            </div>
            <h2 className="mt-2">Hi, {userData.nickName}!</h2>
            <p style={{"fontSize":"0.9rem"}}>{userData.aboutMe}</p>
        </motion.div>
    );
}

export default UserCard;