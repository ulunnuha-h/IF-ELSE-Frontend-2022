import React from "react";
import dataFilosofi from "../Data/DataPh";
import LogoPh from "./LogoPh";

export default function Philosophy() {
    const filosofi = dataFilosofi.map(item=>
        <div class="carousel-item active">
        <LogoPh
        key={item.id}
        {...item}
    />
        </div>
    )
    return(
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true" style={{width:'630px'}} data-bs-touch="true">
             <div className="carousel-inner">
                {filosofi}
             </div>
            <button className="carousel-control-prev position-absolute" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next position-absolute" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators position-relative">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
        </div>
    )
}