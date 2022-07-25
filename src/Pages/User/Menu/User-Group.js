import React, { useContext } from "react";
import PendampingCard from "../../../Components/PendampingCard/PendampingCard";
import FriendCard from "../../../Components/FriendCard/FriendCard";
import { motion } from "framer-motion";
import { Auth } from "../../../Config/Auth";
import { getMahasiswaByUserId,getAllMahasiswaByGroup } from "../../../Data/Mahasiswa";

const UserGroup = () => {
    const userId = parseInt(useContext(Auth).getUserId());
    const groupId = getMahasiswaByUserId(userId).GroupId;
    const allMhs = (groupId ? getAllMahasiswaByGroup(groupId) : []);

    return(
        <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween"}} className="mx-3 d-flex flex-column align-items-center">
            <h3>Pendamping</h3>
            <PendampingCard/>
            <h3 className="mt-4">Group Members</h3>
            <div className="row row-cols-2 row-cols-sm-3 justify-content-center">
                {allMhs.map((mhs,idx) => <FriendCard key={idx} data={mhs}/>)}
            </div>
        </motion.div>
    );
}

export default UserGroup;