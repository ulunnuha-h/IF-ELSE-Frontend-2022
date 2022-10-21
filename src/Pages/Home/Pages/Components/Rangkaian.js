import React from "react";

export default function Rangkaian(props) {
    return ( 
        <span className="rangkaian d-flex flex-column align-items-center text-white">
            <div style={{backgroundImage:`url(${props.image})`,aspectRatio:'8/5',backgroundSize:'cover',backgroundPosition:'center'}} className='w-100'/>
            <h3 className="mt-4 px-2 text-center">{props.title}</h3>
            <p className="px-2 px-lg-4">{props.content}</p>
        </span>
    )
}