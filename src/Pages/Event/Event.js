import React, { useState } from "react";
import './Event.css';
import Bg from '../../Assets/background.svg'
import {ReactComponent as SubmitBtn} from '../../Assets/submit-btn.svg'
import { motion } from "framer-motion";
import { getAllAgenda } from "../../Data/Agenda";

const titleMotion = {
    initial : {
        opacity : 0,
        y:20
    },
    animate : {
        opacity : 1,
        y:0
    },
    transition : {
        duration : 0.3,
        type : 'tween',
        ease : 'circOut'
    }
}

const Event = () => {
    const agendaData = getAllAgenda();
    const [agenda,setAgenda] = useState(1);
    const data = agendaData[agenda-1];

    const nextHandler = () => {
        if(agenda < 4) setAgenda(agenda+1);
    }

    const prevHandler = () => {
        if(agenda > 1) setAgenda(agenda-1);
    }

    return(
        <main className="event-container pt-3" style={{backgroundImage:`url(${Bg})`}}>
            <motion.div {...titleMotion} className="container-lg">
                <section className="text-center mb-4 event-title d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-circle-arrow-left event-switch" onClick={prevHandler}/>
                    <div style={{width:'400px'}}>
                        <h1 className="m-0">RANGKAIAN {agenda}</h1>
                        <h3 className="m-0">"{data.title}"</h3>
                        <span>{data.start_at} - {data.end_at}</span>
                    </div>
                    <i className="fa-solid fa-circle-arrow-right event-switch" onClick={nextHandler}/>
                </section>
                <hr></hr>
                <section className="row">
                    <div className="col-12 col-lg-2 d-flex flex-container flex-column align-items-center">
                        <h5 className="mt-1">Download Surat</h5>
                        <button className="btn-toggle w-100 py-2 my-2">
                            Perizinan <i className="fa-solid fa-circle-down"/>
                        </button>
                        <button className="btn-toggle w-100 py-2 my-2">
                            Pendataan <i className="fa-solid fa-circle-down"/>
                        </button>
                    </div>
                    {data.is_published ? 
                    <div className="col-12 col-lg-10 row p-0 m-auto">
                        <div className="col-12 col-lg-6 p-0">
                            <div className="d-flex flex-column align-items-center p-3 event-box mx-2">
                                <h3 className="text-white">PERIZINAN</h3>
                                <section className="row my-3">
                                    <i className="fa-solid fa-hashtag col-2 event-hastag p-0"/>
                                    <section className="col-10 p-0 text-white text-justify">
                                        Perizinan diisi ketika tidak bisa mengikuti rangkaian acara (diisi sebelum rangkaian acara)
                                    </section>
                                </section>
                                <form className="d-flex flex-column align-items-center my-3">
                                    <input className="event-input w-100" name="perizinan" type="file"/>
                                    <button className="px-4 mt-3 pb-2 pt-1" type="submit">
                                        <SubmitBtn className="m-0 p-0 w-75"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 p-0">
                            <div className="d-flex flex-column align-items-center p-3 event-box m-2">
                                <h3 className="text-white">PENDATAAN</h3>
                                <section className="row my-3">
                                    <i className="fa-solid fa-hashtag col-2 event-hastag p-0"/>
                                    <section className="col-10 p-0 text-white text-justify">
                                        Pendataan diisi apabila saat rangkaian terdapat kendala (diisi ketika rangkaian acara berlangsung)
                                    </section>
                                </section>
                                <form className="d-flex flex-column align-items-center my-3">
                                    <input className="event-input w-100" name="perizinan" type="file"/>
                                    <button className="px-4 mt-3 pb-2 pt-1" type="submit">
                                        <SubmitBtn className="m-0 p-0 w-75"/>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div> : 
                    <div className="col-12 col-lg-10 row p-0 m-0">
                        <div className="alert alert-warning w-75 m-auto mt-5">
                            <i className="fa-solid fa-triangle-exclamation me-2"></i>
                            Perizinan dan Pendataan belum dibuka
                        </div>
                    </div>
                    }
                </section>
            </motion.div>
        </main>
    );
}

export default Event;