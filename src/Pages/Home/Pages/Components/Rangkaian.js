import React from "react";

export default function Rangkaian(props) {
    return ( 
        <span className="rangkaian d-flex flex-column align-items-center text-white">
            <img className="img-fluid" src={props.img} alt="rangkaian"/>
            <h3 className="my-2">Rangkaian {props.id}</h3>
            <p className="px-2 px-lg-4">{props.desc}</p>
        </span>
    )
}