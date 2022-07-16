import { motion } from "framer-motion";
import React, { useContext } from "react";
import { Auth } from "../../../Config/Auth";

const UserProfile = () => {
    const userData = useContext(Auth).getUserData();

    const edit = true;

    return(
        <>{edit ?
        <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween"}} className="mx-3 mb-5 user-profile">
            <h5>Name</h5>
            <section className="mb-3">{userData.name}</section>
            <h5>NickName</h5>
            <section className="mb-3">{userData.nickName}</section>
            <h5>NIM</h5>
            <section className="mb-3">{userData.nim}</section>
            <h5>Address</h5>
            <section className="mb-3">{userData.address}</section>
            <h5>ID Line</h5>
            <section className="mb-3">{userData.idLine}</section>
            <h5>Group Name</h5>
            <section className="mb-3">{userData.group}</section>
        </motion.div>:
        <div className="mx-3 my-5 user-profile">
            <h5>NickName</h5>
            <input type="text" placeholder="NickName" className="mb-3"/>
            <h5>Address</h5>
            <input type="text" placeholder="Address" className="mb-3"/>
            <h5>ID Line</h5>
            <input type="text" placeholder="ID Line" className="mb-3"/>
            <h5>About me</h5>
            <textarea style={{"height":"100px","resize":"none"}} placeholder="About me" className="mb-3"/>
            <button className="btn px-5 me-2">Cancel</button>
            <button className="btn btn-info px-5">Save</button>
        </div>
        }
        </>
    );
}

export default UserProfile;