import React, { useContext ,useState} from 'react'
import { useParams } from 'react-router-dom'
import DetailTask from './Task-detail'
import "./tdstyle.css"
import { getTaskById } from '../../../Data/Task'
import { motion } from 'framer-motion';
import { Auth } from '../../../Config/Auth';
import { getStudentTaskByUserId } from '../../../Data/StudentTask';

export default function Tasks() {
    const param = useParams();
    const details = getTaskById(parseInt(param.id));
<<<<<<< Updated upstream
    const UserId = parseInt(useContext(Auth).getUserId());
    let userData = null;
    if(useContext(Auth).isLogged()){
        userData = getStudentTaskByUserId(UserId,parseInt(param.id));
    }
    
=======

>>>>>>> Stashed changes
    return(
        <motion.div 
            className='container-fluid d-flex flex-column justify-content-center m-0 p-0'
            initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}>
            <DetailTask {...details} userData={userData} userId={UserId}/>
        </motion.div>
    )
}