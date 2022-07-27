import React from "react";
import dataRangkaian from "../Data/DataRangkaian";
import Rangkaian from "./Rangkaian";

export default function Rangkaians() {
    const rangkaian = dataRangkaian.map(item=>
    <div className="swiper-slide container-fluid d-flex justify-content-center gap-5">    
        <Rangkaian 
            key = {item.id}
            {...item}
        />
    </div>
    )
    return (
        <div class="swiper">
            <div class="swiper-wrapper">
                {rangkaian}
            </div>
        </div>
    )
}