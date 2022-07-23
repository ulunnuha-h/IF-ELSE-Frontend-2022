import React from 'react'
import { useParams } from 'react-router-dom'
import DetailTask from './Task-detail'
import "./tdstyle.css"
import { Navigate } from 'react-router-dom'
import { getTaskById } from '../DataTask'

export default function Tasks() {
    const param = useParams();
    const details = getTaskById(parseInt(param.id));

    
    return(
        <div className='container d-flex flex-column justify-content-center'>
            {details? <DetailTask 
                {...details}
            /> : <Navigate to="error"/>}
        </div>
    )
}