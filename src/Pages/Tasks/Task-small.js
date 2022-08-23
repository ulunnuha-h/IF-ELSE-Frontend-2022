import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Task(props) {
    const nav = useNavigate();

    const toLocaledate = () => {
        const date = new Date(props.deadline).toDateString().split(" ");
        return date[2] + " " + date[1] + " " + date[3];
    }

    const handleDesc = (Desc) => {
        if(Desc.length > 80){
            return Desc.slice(0,80) + ' [...]';
        }
        else return Desc;
    }
    
    return(
            <div className=" d-flex flex-row mt-3" onClick={()=>{nav(`${props.id}`);window.scrollTo(0,0)}} style={{minHeight:'280px'}}>
                <div className="taskS--jilid d-sm-flex flex-column position-relative justify-content-center d-none">
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                </div>
                <div className="content--task--small p-4">
                    <article className="content-task-desc d-flex flex-column px-2 justify-content-between h-100">
                        <section>
                            <h4 id="taskS--title">{props.title}</h4>
                            <p id="taskS--desc" className="">{handleDesc(props.description)}</p>
                        </section>
                        <div className="taskS--date d-flex flex-column align-self-end">
                            <p className="m-auto">{toLocaledate()}</p>
                        </div>
                    </article>
                </div>
            </div>
    )
}