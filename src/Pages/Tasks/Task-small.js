import React from 'react'

export default function Task(props) {
    return(
        <div class="d-flex">
            <div class="taskS d-flex flex-row my-3 mx-0">
                <div class="taskS--jilid d-flex flex-column position-relative">
                    <div class="taskS--elipse"></div>
                    <div class="taskS--elipse"></div>
                    <div class="taskS--elipse"></div>
                    <div class="taskS--elipse"></div>
                    <div class="taskS--elipse"></div>
                    <div class="taskS--elipse"></div>
                </div>
                <div class="content--task--small">
                    <article class="d-flex flex-column m-3 ms-5">
                        <h2 id="taskS--title">Task {props.title}</h2>
                        <p id="taskS--desc" class="mt-1">{props.desc}</p>
                        <div class="taskS--date d-flex flex-column align-self-end mt-4">
                            <p class="m-auto">{props.date}</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}