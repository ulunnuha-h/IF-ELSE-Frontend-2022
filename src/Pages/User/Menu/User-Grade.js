import React from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../../Config/Auth";
import { getStudenMarkById } from "../../../Data/Marking";
import { getAgendaById } from "../../../Data/Agenda";

const UserGrade = () => {
    const userId = useAuth().auth.id;
    const data = getStudenMarkById(userId).data;
    
    const list = data.map((dat,idx)=>{
        const namaRangakaian = getAgendaById(dat.agenda_id).title;

        return(
            <tr key={idx}>
                <th scope="row">{idx+1}</th>
                <td>{namaRangakaian}</td>
                <td>{dat.mark === null ? "Belum dinilai" : dat.mark}</td>
            </tr>
        );
    })

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