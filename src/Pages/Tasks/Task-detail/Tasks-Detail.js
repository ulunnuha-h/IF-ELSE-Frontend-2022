import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./tdstyle.css"
import { getTaskById } from '../../../Data/Task'
import { motion } from 'framer-motion';
import { getStudentTaskByUserId } from '../../../Data/StudentTask';
import { updateStudentTaskSubmission } from '../../../Data/StudentTask';
import { useAuth } from '../../../Config/Auth';

export default function Tasks() {
    const {auth} = useAuth();
    const param = useParams();
    const taskId = parseInt(param.id);
    const details = getTaskById(taskId);
    const userId = auth.id;
    const userData = auth.isLogged ? getStudentTaskByUserId(userId,taskId) : null ;
    const nav = useNavigate();
    const [inputUrl,setInputUrl] = useState('');
    const submitted = userData ? userData.Submission : '';

    const submitting = () => {
        updateStudentTaskSubmission(details.userId,details.userData.TaskId,inputUrl);
        setInputUrl('');
        nav('');
    }
    
    return(
        <motion.div 
            className='container-fluid d-flex flex-column justify-content-center m-0 p-0'
            initial={{opacity:0,y:-100}}
            animate={{opacity:1,y:0}}>
            <div className="taskD d-flex flex-row m-lg-3 m-2">
            <div className="taskD--jilid d-lg-flex d-none flex-column position-relative justify-content-center">
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
            </div>
            <div className="taskD--content p-lg-5 p-3" style={{width:"95vw"}}>
                <article className="d-flex flex-column">
                    <header className="align-items-center d-flex row justify-content-between m-0 mb-3">
                        <h1 className="col-lg-6 col-12 m-0 p-0 text-center text-lg-start text-break">{details.Title}</h1>
                        <div className="taskD--deadline flex-column col-lg-5 col-12">
                            <h4>Deadline:</h4>
                            <p className='m-0'>{details.EndAt}, at 23:59 WIB</p>
                        </div>
                        <div className='star-icon align-self-start col-1 p-0 d-lg-block d-none'>
                            <motion.img src={require("./images/Star.png")} alt="star1" style={{filter : submitted? 'none':''}} className="star m-0" id="bintang" animate={submitted ? {rotate:360}:{}} transition={{duration:1,type:"spring"}}/>
                        </div>
                    </header>
                    <div className="taskD--isi">
                        <div className="taskD--detail">
                            <h4>Description:</h4>
                            <pre style={{backgroundColor : "transparent"}}>{details.Description}</pre>
                        </div>
                    </div>
                    {auth.isLogged ?
                    <form onSubmit={e=> {e.preventDefault();submitting()}} className="taskD--formUser d-flex flex-column">
                        <h4>Input URL:</h4>
                        <div className="taskD--inputan row m-0 p-0 justify-content-between ">
                            <input value={inputUrl} onChange={e=>setInputUrl(e.target.value)} name="Username" className="col-lg-10 col-12 rounded border-0 my-2 my-lg-0" required placeholder="Masukkan URL Tugas" style={{backgroundColor: "#FCF4F5"}}/>
                            <span className='col-lg-2 col-6 m-auto px-1'>
                                <button id="btn-submit" type="submit" className="btn btn-secondary border-0 text-black bg-light w-100">Submit</button>
                            </span>
                        </div>
                        <span className='my-1'>
                            <p style={{display: submitted ? "inline":"none"}}>Submitted URL : <a href={submitted} target="blank">{submitted}</a></p>
                        </span>
                    </form>:
                    <div className="alert alert-warning m-auto">
                        <i className="fa-solid fa-triangle-exclamation me-2"></i>
                        Please login in before submitting
                    </div>
                    }
                </article>
            </div>
        </div>
        </motion.div>
    )
}