import React, { useContext } from "react";
import { Auth } from "../../Config/Auth";
import './UserCard.css'
import { motion } from "framer-motion";

const UserCard = () => {
    const userData = useContext(Auth).getUserData();

    return(
        <motion.div initial={{y:-1000,opacity:0}} animate={{y:0,opacity:1}} whileHover={{scale:1.02}} transition={{type:"spring",duration:0.5}} className="user-card d-flex flex-column align-items-center justify-content-between w-100">
            <div className="user-image">
                <img src={userData.img} alt="profilepicture" className="img-fluid"></img>
            </div>
            <h2>Hi, {userData.nickName}!</h2>
            <p>{userData.aboutMe}</p>
        </motion.div>
    );
}

export default UserCard;