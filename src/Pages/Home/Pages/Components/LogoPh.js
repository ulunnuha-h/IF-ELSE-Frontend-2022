import React from "react";

export default function LogoPh(props) {
    return(
        <div className="filosofi d-flex flex-column align-items-center gap-2">
            <img src={props.logo} alt="logo"/>
            <h2>/{props.filosofi}/</h2>
            <p>{props.desc}</p>
        </div>
    )
}