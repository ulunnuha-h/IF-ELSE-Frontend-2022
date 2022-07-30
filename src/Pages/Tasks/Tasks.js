import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { getAllTask } from '../../Data/Task';
import Task from './Task-small'
import "./task-style.css"
import { motion } from 'framer-motion';
import { useAuth } from '../../Config/Auth';
import Bg from '../../Assets/background.svg'

export default function Tasks() {
    const {auth} = useAuth();
    const nav = useNavigate();
    const [side,setSide] = useState(false);
    const detailStyle = 'col-12 col-lg-8 p-0';
    const listStyle = 'row justify-content-center mx-0 px-1 pb-3';
    const arrayTask = getAllTask();

    return(
        <main style={{backgroundColor:'#ba4b00',backgroundImage:`url(${Bg})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
        <div className='container-lg row mx-auto px-0' style={{minHeight:'100vh',zIndex:'0'}}>
            <div className={side ? (detailStyle) : (detailStyle + ' d-none')} id='detail'>
                <div className='position-sticky' style={{top:"76px",height:"calc(100vh - 76px)"}}>
                    <section className='h-100' style={{overflowY:"auto"}}>
                        <Outlet/>
                        <section className='d-flex justify-content-end pe-3'>
                            <span className='px-3 py-2 rounded mb-3 text-light' style={{backgroundColor:"var(--color-2-p)",cursor:"pointer"}} onClick={()=>{setSide(false);nav('')}}>Close <i className="fa-solid fa-arrow-right-to-bracket"></i></span>
                        </section>
                    </section>
                </div>
            </div>
            <div className={side ? listStyle + ' col-4 d-lg-block d-none' : listStyle + ' col-12' } id='list'>
                {arrayTask.map((item,idx)=>
                    <motion.span 
                        key={item.ID} 
                        initial={{y:50,opacity:0}} 
                        animate={{y:0,opacity:1}} 
                        whileHover={{scale:1.02}} 
                        transition={{scale:{delay:0},delay:(idx*0.03)}} 
                        className='taskS mt-3 p-0'
                        style={{height:'fit-content'}}>                        
                        <Task {...item} setSide={setSide} auth={auth}/>
                    </motion.span>)}
            </div>
        </div>
        </main>
    )
}