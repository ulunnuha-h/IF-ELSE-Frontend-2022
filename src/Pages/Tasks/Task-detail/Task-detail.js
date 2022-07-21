import React, { useState } from 'react'

export default function Detail(props){
    const [isMarked , setIsMarked] = useState(false);
    const handleClick = () => {
        setIsMarked(current => !current)
    };

    // const submit = ()=> {
    //     document.getElementById('btn-mark').removeAttribute("disabled");
    // }

    return(
        <div className="taskD d-flex flex-row my-5 me-5 ms-3 w-auto h-auto">
            <div className="taskD--jilid d-flex flex-column position-relative">
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
                <div className="taskD--elipse"></div>
            </div>
            <div className="taskD--content">
                <article className="d-flex flex-column my-lg-5 me-lg-5 my-md-5 me-md-5 my-sm-1 me-sm-1" style={{marginLeft: "100px"}}>
                    <header className="align-items-center d-flex row justify-content-between">
                        <h1 className="col-md-7 col-12 col-lg-6">Task {props.title}</h1>
                        <div className="taskD--deadline flex-column col-md-3 col-8 col-lg-4">
                            <h4>Deadline:</h4>
                            <p>{props.date}, at 23:59 WIB</p>
                        </div>
                        <div className='star-icon position relative col-md-1 col-lg-2 justify-content-end' style={{width: "60px"}}>
                            <input type="checkbox" className='position-absolute'></input>
                            <img src={require("./images/Star.png")} alt="star1" style={{filter : isMarked? 'none':'',width: "50px",color: "#B4B4B4",marginBottom:"40px"}}className="star col-md-1 col-lg-2 justify-content-end" id="bintang"/>
                        </div>
                    </header>
                    <div className="taskD--isi">
                        <div className="taskD--detail">
                            <h4>Description:</h4>
                            <p>{props.desc}</p>
                        </div>
                        <div className="taskD--ketentuan">
                            <h4>Ketentuan:</h4>
                            <p>{props.requirement}</p>
                        </div>
                    </div>
                    <div className="taskD--formUser d-flex flex-column">
                            <h4>Input URL:</h4>
                        <div className="taskD--inputan row gap-1">
                            <input type="link" name="Username" className="rounded col-md-7 col-12 border-0 ms-2 col-sm-1" placeholder="Masukkan URL Tugas" style={{backgroundColor: "#FCF4F5"}}/>
                            <button id="btn-submit" className="btn btn-secondary col-md-2 col-5 border-0" style={{backgroundColor: "#FCF4F5", color: "black"}}>Submit</button>
                            <button id="btn-mark" className="btn btn-secondary col-md-2 col-5 border-0" style={{backgroundColor: "#FCF4F5",color: "black"}} onClick={handleClick}>Mark as done</button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}