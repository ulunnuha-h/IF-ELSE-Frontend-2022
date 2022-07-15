import React from 'react'

export default function Task(props) {
    return(
        <div className="d-flex">
            <div className="taskS d-flex flex-row my-3 mx-0">
                <div className="taskS--jilid d-flex flex-column position-relative">
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                    <div className="taskS--elipse"></div>
                </div>
                <div className="content--task--small">
                    <article className="d-flex flex-column m-3 ms-5">
                        <h2 id="taskS--title">Task {props.title}</h2>
                        <p id="taskS--desc" className="mt-1">{props.desc}</p>
                        <div className="taskS--date d-flex flex-column align-self-end mt-4">
                            <p className="m-auto">{props.date}</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}