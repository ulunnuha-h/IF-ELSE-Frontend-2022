import React, { useEffect, useState } from "react";
import PendampingCard from "../../../Components/PendampingCard/PendampingCard";
import FriendCard from "../../../Components/FriendCard/FriendCard";
import { motion } from "framer-motion";
import { useAuth } from "../../../Config/Auth";
import { getMahasiswaByUserId } from "../../../Data/Mahasiswa";
import { useOutletContext } from "react-router-dom";
import { getKelompokById } from "../../../Data/Kelompok";

const UserGroup = () => {
    const [,,data] = useOutletContext();
    const [groupData,setGroupData] = useState('');
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        if(data.group_id) {
            getKelompokById(data.group_id)
            .then(res => {
                setGroupData(res.data);
                setLoading(false);
            });
        };
    },[data])

    if(loading) return(
        <div style={{minHeight : '100vh'}} className="d-flex justify-content-center p-5">
            <span className="profile-loader"/>
        </div>
    )

    return(
        <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween"}} className="mx-3 d-flex flex-column align-items-center">
            <h3>Pendamping</h3>
            <PendampingCard data={groupData}/>
            <h3 className="mt-4">Group Members</h3>
            <div className="row row-cols-2 row-cols-sm-3 justify-content-center">
                {groupData.Student && groupData.companion_name !== "Belum diatur" ? 
                    groupData.Student.map((mhs,idx) => <FriendCard key={idx} data={mhs}/>) : 
                    <span>-</span>}
            </div>
        </motion.div>
    );
}

export default UserGroup;