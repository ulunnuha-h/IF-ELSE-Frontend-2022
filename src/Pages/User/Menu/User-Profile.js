import { motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { Auth } from "../../../Config/Auth";

const UserProfile = () => {
    const userData = useContext(Auth).getUserData();

    const [nick,setNick] = useState(userData.nickName);
    const [address,setAddress] = useState(userData.address);
    const [line,setLine] = useState(userData.idLine);
    const [about,setAbout] = useState(userData.aboutMe);

    const edit = false;

    return(
        <>{!edit ?
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
        <motion.div initial={{opacity:0}} animate={{opacity:1}} className="mx-3 my-5 user-profile">
            <h5>NickName</h5>
            <input type="text" placeholder="NickName" className="mb-3" value={nick} onChange={(e)=>setNick(e.target.value)}/>
            <h5>Address</h5>
            <input type="text" placeholder="Address" className="mb-3" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <h5>ID Line</h5>
            <input type="text" placeholder="ID Line" className="mb-3" value={line} onChange={(e)=>setLine(e.target.value)}/>
            <h5>About me</h5>
            <textarea 
                style={{"height":"100px","resize":"none"}} 
                placeholder="About me" 
                className="mb-3"
                value={about}
                onChange={(e)=>setAbout(e.target.value)}
                />
            <button className="btn-cancel px-5 py-2 me-2">Cancel</button>
            <button className="btn-save px-5 py-2">Save</button>
        </motion.div>
        }
        </>
    );
}

export default UserProfile;