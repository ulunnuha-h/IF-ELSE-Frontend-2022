import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Task(props) {
    const nav = useNavigate();
    return(
            <div className="taskS d-flex flex-row my-3 mx-0" onClick={()=>nav(`${props.id}`)}>
                <div className="taskS--jilid d-flex flex-column position-relative">
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                </div>
                <div className="content--task--small">
                    <article className="content-task-desc d-flex flex-column m-3 ms-5">
                        <h2 id="taskS--title">Task {props.title}</h2>
                        <p id="taskS--desc" className="mt-1">{props.desc}</p>
                            <div className="taskS--date d-flex flex-column align-self-end mt-4" style={{backgroundColor : props.isCompleted?"var(--color-2-s)":''}}>
                                {props.isCompleted? <p className='m-auto'>COMPLETED</p> : <p className="m-auto">{props.date}</p>}
                            </div>
                    </article>
                </div>
            </div>
    )
}