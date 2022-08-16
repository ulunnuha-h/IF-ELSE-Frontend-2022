import React, { useState } from "react";
import './UserCard.css'
import { motion } from "framer-motion";
import { getMahasiswaByUserId } from "../../Data/Mahasiswa";
import { useAuth } from "../../Config/Auth";
import UpdatePicture from "../UpdatePicture/UpdatePicture";

const UserCard = () => {
    const {auth} = useAuth();
    const [editPicture,setEditPicture] = useState(false);
    const userId = auth.id;
    const userData = (userId ? 
        getMahasiswaByUserId(userId):
        {
            nickname : "tidak ada",
            about :"tidak ada", 
            avatar : "https://divedigital.id/wp-content/uploads/2021/10/1-min.png"
        });

    return(
        <motion.div 
            initial={{y:-1000,opacity:0}} 
            animate={{y:0,opacity:1}} 
            whileHover={{scale:1.02}} 
            transition={{type:"tween",duration:0.5,ease:"circOut"}} 
            className="user-card d-flex flex-column align-items-center justify-content-between">
            <UpdatePicture {...{editPicture,setEditPicture}}/>
            <div className="user-image d-flex justify-content-end align-items-end" style={{backgroundImage:`url(${userData.avatar})`,backgroundSize:"cover"}}>
                <span className="edit-image position-relative py-1 px-2" onClick={()=>setEditPicture(true)}>
                    <i className="fa-solid fa-camera m-0 p-0"/>
                </span>
            </div>
            <h2 className="mt-2">Hi, {userData.nickname}!</h2>
            <p style={{"fontSize":"0.9rem"}}>{userData.about}</p>
        </motion.div>
    );
}

export default UserCard;