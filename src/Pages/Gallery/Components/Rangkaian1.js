import React from "react";
import './GalleryR1.css';
import dataP from '../Data/PhotoR1'
import { indexOf } from "lodash";

const Rangkaian1 = () => {
    const photo = dataP.map(item=>
        <img key={indexOf(item)+1} 
        alt='gallery-pics'
        src={item}
        id="the--photo" 
        className="col-lg-4 col-md-6 col-sm-9 fancybox"
        data-fancybox = 'gallery'
        />
    )
    return(
        <div className="container-G align-items center container">
            <h2>RANGKAIAN 1</h2>
            <p>"LIGHT UP THE TORCH, EXPLORE A WHOLE NEW WORLD"</p>
            <div ClassName="d-flex row display">
                {photo}
            </div>
        </div>)
}

export default Rangkaian1;