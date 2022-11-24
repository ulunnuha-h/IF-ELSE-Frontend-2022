import React from "react";
import './GalleryR2.css';
import dataP from '../Data/PhotoR2'

const Rangkaian2 = () => {
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
            <h2>RANGKAIAN 2</h2>
            <p>"MAKE A NEW STORY, WITH YOUR NEW FAMILY"</p>
            <div className="d-flex row display-2">
                {photo}
            </div>
        </div>)
}

export default Rangkaian2;