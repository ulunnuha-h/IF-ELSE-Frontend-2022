import React, { useState } from "react";
import './UserCard.css'
import { motion } from "framer-motion";
import UpdatePicture from "../UpdatePicture/UpdatePicture";

const UserCard = (props) => {
    const [editPicture,setEditPicture] = useState(false);

    return(
        <motion.div 
            initial={{y:-1000,opacity:0}} 
            animate={{y:0,opacity:1}} 
            whileHover={{scale:1.02}} 
            transition={{type:"tween",duration:0.5,ease:"circOut"}} 
            className="user-card d-flex flex-column align-items-center">
            <UpdatePicture {...{editPicture,setEditPicture}}/>
            <div className="user-image d-flex justify-content-end align-items-end" style={{backgroundImage:`url(${props.data.avatar})`,backgroundSize:"cover"}}>
                <span className="edit-image position-relative py-1 px-2" onClick={()=>setEditPicture(true)}>
                    <i className="fa-solid fa-camera m-0 p-0"/>
                </span>
            </div>
            <div className="my-3">
                <h2 className="text-center">Hi, {props.data.nickname}!</h2>
                <p style={{"fontSize":"0.9rem"}}>{props.data.about}</p>
            </div>
        </motion.div>
    );
}

export default UserCard;