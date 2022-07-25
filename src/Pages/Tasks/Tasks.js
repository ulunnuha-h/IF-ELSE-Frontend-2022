import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { getAllTask } from '../../Data/Task';
import Task from './Task-small'
import "./task-style.css"
import { motion } from 'framer-motion';

export default function Tasks() {
    const nav = useNavigate();
    const [side,setSide] = useState(false);
    const detailStyle = 'col-12 col-lg-9 p-0';
    const listStyle = 'row justify-content-center mx-0 px-1 pb-3';
    const arrayTask = getAllTask();

    return(
        <div className='container-fluid row mx-0 px-0' style={{minHeight:'100vh'}}>
            <div className={side ? (detailStyle + ' d-block') : (detailStyle + ' d-none')} id='detail'>
                <div className='position-sticky' style={{top:"76px",height:"calc(100vh - 76px)"}}>
                    <section className='h-100' style={{overflowY:"auto"}}>
                        <Outlet/>
                        <section className='d-flex justify-content-end pe-3'>
                            <span className='px-3 py-2 rounded mb-3 text-light' style={{backgroundColor:"var(--color-2-p)",cursor:"pointer"}} onClick={()=>{setSide(false);nav('')}}>Close <i className="fa-solid fa-arrow-right-to-bracket"></i></span>
                        </section>
                    </section>
                </div>
            </div>
            <div className={side ? listStyle + ' col-3 d-lg-flex d-none' : listStyle + ' col-12' } id='list'>
                {arrayTask.map((item,idx)=>
                    <motion.span 
                        key={item.ID} 
                        initial={{y:50,opacity:0}} 
                        animate={{y:0,opacity:1}} 
                        whileHover={{scale:1.02}} 
                        transition={{scale:{delay:0},delay:(idx*0.03)}} 
                        className='taskS mt-3 p-0'
                        style={{height:"fit-content"}}>                        
                        <Task {...item} setSide={setSide}/>
                    </motion.span>)}
            </div>
        </div>
    )
}