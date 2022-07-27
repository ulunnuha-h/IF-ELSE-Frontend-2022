import { motion } from "framer-motion";
import React, {useState} from "react";
import { useOutletContext } from "react-router-dom";
import { getMahasiswaByUserId,updateMahasiswaData } from "../../../Data/Mahasiswa";
import { getKelompokNameById } from "../../../Data/Kelompok";
import { useAuth } from "../../../Config/Auth";

const UserProfile = () => {
    const {auth} = useAuth();
    const UserId = auth.id;
    const userData = UserId ? getMahasiswaByUserId(UserId) : {};
    const [editProfile,toggleEditProfile] = useOutletContext();
    const [nick,setNick] = useState(userData.nickname);
    const [address,setAddress] = useState(userData.address);
    const [line,setLine] = useState(userData.line);
    const [about,setAbout] = useState(userData.about);    

    const editUser = () => {
        updateMahasiswaData(userData.user_id,{nickName : nick, address,idLine : line, aboutMe : about});
    }

    return(
        <>{!editProfile ?
        <div className="mx-3 mb-5 user-profile">
            <h5>Name</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.nama}</motion.section>
            <h5>NickName</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.nickname}</motion.section>
            <h5>NIM</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.nim}</motion.section>
            <h5>Address</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.address}</motion.section>
            <h5>ID Line</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{userData.line}</motion.section>
            <h5>Group Name</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{getKelompokNameById(userData.group_id)}</motion.section>
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