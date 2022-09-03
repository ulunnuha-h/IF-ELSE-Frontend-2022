import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./tdstyle.css"
import { getSubmissionData, getTaskById } from '../../../Data/Task'
import { motion } from 'framer-motion';
import TaskAlert from './Tasks-Detail-Alert';
import { toLocalDate } from '../../../Config/Converter';

const detailMotion = {
    initial:{opacity:0,y:-100},
    animate:{opacity:1,y:0}
}

export default function Tasks() {
    const param = useParams();

    const taskId = parseInt(param.id);

    const [details,setDetails] = useState({});
    const [userData, setUserData] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getTaskById(taskId)
        .then(res => {
            setDetails(res.data)
            setLoading(false);
        });
        if(localStorage.getItem('token') !== null){
            setLoading(true);
            getSubmissionData(taskId)
            .then(res => {
                setUserData(res);
                setLoading(false);
            });
        }
    },[taskId])
    
    const [input1,setInput1] = useState('');
    const handleInput1 = (e) => setInput1(e.target.value);
    const [input2,setInput2] = useState('');
    const handleInput2 = (e) => setInput2(e.target.value);
    const done = userData[0]?.link.length !== 0 ;

    const [alert,setAlert] = useState(false);
    const [submitted,setSubmitted] = useState([]);

    const submitting = (e) => {
        e.preventDefault();
        if(details.jumlah_link > 0) setSubmitted([input1]);
        if(details.jumlah_link > 1) setSubmitted([input1,input2]);
    }
    
    if(loading) return(
        <div style={{minHeight : '100vh'}} className="d-flex justify-content-center p-5">
            <span className="profile-loader"/>
        </div>
    );

    return(
        <motion.div {...detailMotion} className='container-fluid d-flex flex-column justify-content-center m-0 p-0'>
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
                        <h1 className="col-lg-6 col-12 m-0 p-0 text-center text-lg-start text-break">{details.title}</h1>
                        <div className="taskD--deadline flex-column col-lg-5 col-12">
                            <h4>Deadline:</h4>
                            <p className='m-0'>{toLocalDate(details.deadline)}</p>
                        </div>
                        <div className='star-icon align-self-start col-1 p-0 d-lg-block d-none'>
                            <img src={require("./images/Star.png")} alt="star1" style={{filter : 'none'}} className="star m-0" id="bintang"/>
                        </div>
                    </header>
                    {done && userData.length !== 0? 
                    <section>
                        <div className="alert alert-info mb-3">
                        <i className="fa-solid fa-circle-info me-2"/>
                            Terima kasih Anda sudah melakukan submit!
                        </div>    
                        {userData.map((data,idx) => <section key={idx}>{data.label_link} : {data.link}</section>)}
                        {toLocalDate(userData[0]?.time)}
                    </section> :
                    <>
                    <div className="taskD--isi">
                        <div className="taskD--detail">
                            <h4>Deskripsi :</h4>
                            <pre style={{backgroundColor : "transparent"}}>{details.description}</pre>
                        </div>
                        <div className="taskD--detail">
                            <h4>Ketentuan :</h4>
                            <pre style={{backgroundColor : "transparent"}}>{details.condition}</pre>
                        </div>
                        <div className="taskD--detail">
                            <h4>Cara :</h4>
                            <pre style={{backgroundColor : "transparent"}}>{details.step}</pre>
                        </div>
                    </div>
                    {localStorage.getItem('token') !== null ?
                    <form className="taskD--formUser d-flex flex-column" onSubmit={submitting}>
                    { details.jumlah_link > 0 ?
                    <>
                        <h4>Input URL:</h4>
                        <div className="taskD--inputan m-0 p-0 d-flex flex-column">
                            <label htmlFor='input1'>{details.Links[0].title}</label>
                            <input type="text" name="input1" className="rounded border-0 px-2 py-1" placeholder="Input Url ..." value={input1} onChange={handleInput1} required/>
                            <span className='mb-3 task-submitted'>Submitted link : {submitted[0]}</span>
                            { details.jumlah_link > 1 ?
                                <>
                                    <label htmlFor='input2'>{details.Links[1].title}</label>
                                    <input name="input2" className="rounded border-0 px-2 py-1" placeholder="Input Url ..." value={input2} onChange={handleInput2} required/>
                                    <span className='mb-3 task-submitted'>Submitted link : {submitted[1]}</span>
                                </> : null
                            }
                        </div>
                    </> : null}
                    <section className='align-self-end mt-1 taskD--inputan'>
                        { details.jumlah_link > 0 ? 
                        <>
                            <button className='px-3 py-1 border-0 mx-1 rounded'>Submit</button> 
                            <button disabled={submitted.length !== details.jumlah_link} type='button' className='px-3 py-1 border-0 mx-1 rounded' onClick={()=>setAlert(true)}>Mark as Done</button>
                        </>
                        : null}
                    </section>
                    </form>:
                    <div className="alert alert-warning m-auto">
                        <i className="fa-solid fa-triangle-exclamation me-2"></i>
                        Silakan login terlebih dahulu sebelum melakukan submit tugas
                    </div>
                    }
                </>}
                </article>
            </div>
        </div>
        <TaskAlert {...{alert,setAlert,submitted,taskId}}/>
        </motion.div>
    )
}