import React from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";

const UserGrade = () => {
    const [,,data] = useOutletContext();
    
    const list =( data.Marking ? data.Marking.map((dat,idx)=>{
        return(
            <tr key={idx}>
                <th scope="row">{idx+1}</th>
                <td>{dat.Agenda.title}</td>
                <td>{dat.mark === 0 ? "Belum dinilai" : dat.mark    }</td>
            </tr>
        );}) : null )

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
                        <th scope="col-1">No</th>
                        <th scope="col-12">Nama Rangkaian</th>
                        <th scope="col-1">Nilai</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </motion.div>
    );
}

export default UserGrade;