import React from "react";
import dataFilosofi from "../Data/DataPh";
import LogoPh from "./LogoPh";

export default function Philosophy() {
    const filosofi = dataFilosofi.map(item=>
        <LogoPh key={item.id} {...item}/>
    )

    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{width:'460px'}}>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    {filosofi[0]}
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    {filosofi[1]}
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    {filosofi[2]}
                </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon me-4" aria-hidden="true"/>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon ms-4" aria-hidden="true"/>
          </button>
        </div>
    )
}