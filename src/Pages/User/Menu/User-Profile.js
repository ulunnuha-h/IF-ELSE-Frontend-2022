import { motion } from "framer-motion";
import React, {useContext, useState} from "react";
import { useOutletContext } from "react-router-dom";
import { Auth } from "../../../Config/Auth";
import { getMahasiswaByUserId,updateMahasiswaData } from "../../../Data/Mahasiswa";
import { getKelompokNameById } from "../../../Data/Kelompok";

const UserProfile = () => {
    const UserId = parseInt(useContext(Auth).getUserId());
    const userData = getMahasiswaByUserId(UserId);
    const [editProfile,toggleEditProfile] = useOutletContext();
    const [nick,setNick] = useState(userData.Nickname);
    const [address,setAddress] = useState(userData.Address);
    const [line,setLine] = useState(userData.Line);
    const [about,setAbout] = useState(userData.About);    

    const editUser = () => {
        updateMahasiswaData(userData.NIM,{nickName : nick, address,idLine : line, aboutMe : about});
    }

    return(
        <>{!editProfile ?
        <div className="mx-3 mb-5 user-profile">
            <h5>Name</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.Name}</motion.section>
            <h5>NickName</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.Nickname}</motion.section>
            <h5>NIM</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.NIM}</motion.section>
            <h5>Address</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.Address}</motion.section>
            <h5>ID Line</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.Line}</motion.section>
            <h5>Group Name</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{getKelompokNameById(userData.GroupId)}</motion.section>
        </div>:
        <div className="mx-3 my-0 user-profile">
            <h5>NickName</h5>
            <input maxLength="10" type="text" placeholder="NickName" className="mb-3" value={nick} onChange={(e)=>setNick(e.target.value)}/>
            <h5>Address</h5>
            <input maxLength="50" type="text" placeholder="Address" className="mb-3" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <h5>ID Line</h5>
            <input maxLength="20" type="text" placeholder="ID Line" className="mb-3" value={line} onChange={(e)=>setLine(e.target.value)}/>
            <h5>About me <span style={{"fontSize":"12px"}}>({160 - about.length} Character left)</span></h5>
            <textarea 
                style={{"height":"100px","resize":"none"}} 
                placeholder="About me" 
                className="mb-3"
                value={about}
                onChange={(e)=>setAbout(e.target.value)}
                maxLength="160"
                />
            <div className="d-flex justify-content-end">
                <button className="btn-cancel px-5 py-2 me-2" onClick={()=>toggleEditProfile()}>Cancel</button>
                <button className="btn-save px-5 py-2" onClick={()=>{editUser();toggleEditProfile();}}>Save</button>
            </div>
        </div>
        }
        </>
    );
}

export default UserProfile;