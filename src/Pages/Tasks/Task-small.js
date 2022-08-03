import React from 'react'
import { useNavigate } from 'react-router-dom'
import { getStudentTaskByUserId } from '../../Data/StudentTask';

export default function Task(props) {
    const nav = useNavigate();
    const userData = props.auth.isLogged ? 
        getStudentTaskByUserId(props.auth.id,props.id):
        {submission : null};

    console.log(props.auth);

    const handleDesc = (Desc) => {
        if(Desc.length > 80){
            return Desc.slice(0,80) + ' [...]';
        }
        else return Desc;
    }
    
    return(
            <div className=" d-flex flex-row mt-3" onClick={()=>{props.setSide(true);nav(`${props.id}`);window.scrollTo(0,0)}} style={{minHeight:'280px'}}>
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
                        <div className="taskS--date d-flex flex-column align-self-end" style={{backgroundColor : userData.submission !== null?"var(--color-2-s)":''}}>
                            {userData.submission !== null ? <p className='m-auto'>COMPLETED</p> : <p className="m-auto">{props.end_at}</p>}
                        </div>
                    </article>
                </div>
            </div>
    )
}