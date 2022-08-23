import { motion } from "framer-motion";
import React, {useEffect, useState} from "react";
import { useOutletContext } from "react-router-dom";
import LoadingSpinner from "../../../Components/Loading/LoadingSpinner";
import { updateMahasiswaData } from "../../../Data/Mahasiswa";

const UserProfile = () => {
    const [editProfile,toggleEditProfile,data] = useOutletContext();
    const [nick,setNick] = useState('');
    const [address,setAddress] = useState('');
    const [line,setLine] = useState('');
    const [wa,setWa] = useState('');
    const [about,setAbout] = useState('');
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setNick(data.nickname);
        setAddress(data.address);
        setLine(data.line);
        setWa(data.whatsapp);
        setAbout(data.about);
    },[data])

    const editUser = () => {
        setLoading(true);
        updateMahasiswaData(
            {nickname : nick, address, line,about,whatsapp : wa}
        ).then(() => {
            setLoading(false);
            window.location.reload();
            toggleEditProfile();
        });
    }

    return(
        <>{!editProfile ?
        <div className="mx-3 mb-5 user-profile">
            <h5>Name</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{data.name}</motion.section>
            <h5>NickName</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{data.nickname}</motion.section>
            <h5>NIM</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{data.nim}</motion.section>
            <h5>Address</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{data.address}</motion.section>
            <h5>ID Line</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{data.line}</motion.section>
            <h5>Whatsapp</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{data.whatsapp}</motion.section>
            <h5>Group Name</h5>
            <motion.section initial={{opacity:0,scale:0.5}} whileInView={{opacity:1,scale:1}} className="mb-3">{data.group_name}</motion.section>
        </div>:
        <div className="mx-3 my-0 user-profile">
            <h5>NickName</h5>
            <input maxLength="10" type="text" placeholder="NickName" className="mb-3" value={nick} onChange={(e)=>setNick(e.target.value)}/>
            <h5>Address</h5>
            <input maxLength="50" type="text" placeholder="Address" className="mb-3" value={address} onChange={(e)=>setAddress(e.target.value)}/>
            <h5>ID Line</h5>
            <input maxLength="20" type="text" placeholder="ID Line" className="mb-3" value={line} onChange={(e)=>setLine(e.target.value)}/>
            <h5>Whatsapp</h5>
            <input maxLength="20" type="text" placeholder="Whatsapp" className="mb-3" value={wa} onChange={(e)=>setWa(e.target.value)}/>
            <h5>About me <span style={{"fontSize":"12px"}}>({about ? 160 - about.length : 0} Character left)</span></h5>
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
                <button className="btn-save px-5 py-2" onClick={()=>{editUser()}}>{loading ? <LoadingSpinner/> : "Save"}</button>
            </div>
        </div>
        }
        </>
    );
}

export default UserProfile;