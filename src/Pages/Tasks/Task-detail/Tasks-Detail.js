import React from 'react'
import { useParams } from 'react-router-dom'
import Data from '../DataTask'
import DetailTask from './Task-detail'
import "./tdstyle.css"
import { Navigate } from 'react-router-dom'

export default function Tasks() {
    const param = useParams();
    const details = Data.find(detail => detail.id === parseInt(param.id));
    
    return(
        <div className='container d-flex flex-column justify-content-center'>
            {details? <DetailTask 
                {...details}
            /> : <Navigate to="error"/>}
        </div>
    )
}