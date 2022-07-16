import React from "react";
import PendampingCard from "../../../Components/PendampingCard/PendampingCard";
import FriendCard from "../../../Components/FriendCard/FriendCard";
import { motion } from "framer-motion";

const UserGroup = () => {
    return(
        <motion.div initial={{y:50,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween"}} className="mx-3 d-flex flex-column align-items-center">
            <h3>Pendamping</h3>
            <PendampingCard/>
            <h3 className="mt-4">Group Members</h3>
            <div className="row row-cols-2 row-cols-sm-3 justify-content-center">
                <FriendCard/>
            </div>
        </motion.div>
    );
}

export default UserGroup;