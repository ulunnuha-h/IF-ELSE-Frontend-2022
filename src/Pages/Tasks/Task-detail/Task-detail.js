import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { updateStudentTaskSubmission } from '../../../Data/StudentTask';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../Config/Auth';

export default function Detail(props){
    const {auth} = useAuth();
    const nav = useNavigate();
    const [inputUrl,setInputUrl] = useState('');
    const submitted = props.userData ? props.userData.Submission : '';

    const submitting = () => {
        updateStudentTaskSubmission(props.userId,props.userData.TaskId,inputUrl);
        setInputUrl('');
        nav('');
    }

    return(
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
                        <h1 className="col-lg-6 col-12 m-0 p-0 text-center text-lg-start text-break">{props.Title}</h1>
                        <div className="taskD--deadline flex-column col-lg-5 col-12">
                            <h4>Deadline:</h4>
                            <p className='m-0'>{props.EndAt}, at 23:59 WIB</p>
                        </div>
                        <div className='star-icon align-self-start col-1 p-0 d-lg-block d-none'>
                            <motion.img src={require("./images/Star.png")} alt="star1" style={{filter : submitted? 'none':''}} className="star m-0" id="bintang" animate={submitted ? {rotate:360}:{}} transition={{duration:1,type:"spring"}}/>
                        </div>
                    </header>
                    <div className="taskD--isi">
                        <div className="taskD--detail">
                            <h4>Description:</h4>
                            <pre style={{backgroundColor : "transparent"}}>{props.Description}</pre>
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
    )
}