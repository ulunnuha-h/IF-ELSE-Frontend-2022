import React from "react";
import { motion } from "framer-motion";

const UserGrade = () => {
    return(
        <motion.div 
            initial={{y:50,opacity:0}} 
            animate={{y:0,opacity:1}} 
            transition={{type:"tween"}}
            className="p-4 mx-3"
            style={{"backgroundColor":"var(--color-1-p)","color":"white","borderRadius":"12px"}}>
            <table className="user-grade w-100">
                <thead style={{"borderBottom":"solid white 1px"}}>
                    <tr>
                        <th scope="col-1">No.</th>
                        <th scope="col-12">Task Name</th>
                        <th scope="col-1">Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                </tbody>
            </table>
        </motion.div>
    );
}

export default UserGrade;