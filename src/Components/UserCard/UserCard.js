import React, { useContext } from "react";
import './UserCard.css'
import { motion } from "framer-motion";
import { getMahasiswaByUserId } from "../../Data/Mahasiswa";
import { Auth } from "../../Config/Auth";

const UserCard = () => {
    const userId = parseInt(useContext(Auth).getUserId());
    const userData = (getMahasiswaByUserId(userId) ? getMahasiswaByUserId(userId):{nickName : "tidak ada",aboutMe :"tidak ada", img : "https://divedigital.id/wp-content/uploads/2021/10/1-min.png"} );

    return(
        <motion.div 
            initial={{y:-1000,opacity:0}} 
            animate={{y:0,opacity:1}} 
            whileHover={{scale:1.02}} 
            transition={{type:"tween",duration:0.5,ease:"circOut"}} 
            className="user-card d-flex flex-column align-items-center justify-content-between">
            <div className="user-image" style={{backgroundImage:`url(${userData.Avatar})`,backgroundSize:"cover"}}/>
            <h2 className="mt-2">Hi, {userData.Nickname}!</h2>
            <p style={{"fontSize":"0.9rem"}}>{userData.About}</p>
        </motion.div>
    );
}

export default UserCard;