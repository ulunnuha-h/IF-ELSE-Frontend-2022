import React from "react";

export default function Rangkaian(props) {
    return ( 
        <div className="rangkaian d-flex flex-column align-items-center">
            <img src={props.img} alt="rangkaian"/>
            <h2>Rangkaian {props.id}</h2>
            <p>{props.desc}</p>
        </div>
    )
}