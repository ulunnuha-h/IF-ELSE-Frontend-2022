import React from 'react'
import arrayTask from './DataTask'
import Task from './Task-small'
import "./task-style.css"

export default function Tasks() {
    const task = arrayTask.map(item=><Task 
        key = {item.id}
        {...item}
    />)
    return(
        <div className='container-fluid row row-cols-auto'>
            {task}
        </div>
    )
}