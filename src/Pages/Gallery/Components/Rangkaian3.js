import React from "react";
import './GalleryR3.css';
import dataP from '../Data/PhotoR3'

const Rangkaian3 = () => {
    const photo = dataP.map((item,idx)=>
        <img key={idx} 
        alt='gallery-pics'
        src={item}
        id="the--photo" 
        className="col-lg-4 col-md-6 col-sm-9 fancybox"
        data-fancybox = 'gallery'
        />
    )
    return(
        <div className="container-G-2 align-items center container">
            <h2>RANGKAIAN 3</h2>
            <p>"CARVE OUT YOUR STORY FOR A NEW HISTORY"</p>
            <div className="d-flex row display-2">
                {photo}
            </div>
        </div>)
}

export default Rangkaian3;

