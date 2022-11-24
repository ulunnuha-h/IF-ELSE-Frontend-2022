import React from "react";
import './GalleryR1.css';
import dataP from '../Data/PhotoR1'

const Rangkaian1 = () => {
    const photo = dataP.map((item,idx)=>
        <a  data-fancybox = 'gallery' 
            href={item}
            className="col-lg-4 col-md-6 col-sm-9 py-2 px-lg-2 px-0"
            key={idx}
            >
            <img
            alt='thumbnail'
            id="photo-thumb" 
            src={require(`../../../Assets/r1-thumbnails/${idx+1}.jpg`)}
            className="w-100"
            />
        </a>
    )
    
    return(
        <div className="container-G align-items center container">
            <h2>RANGKAIAN 1</h2>
            <p>"LIGHT UP THE TORCH, EXPLORE A WHOLE NEW WORLD"</p>
            <div className="d-flex row display">
                {photo}
            </div>
        </div>)
}

export default Rangkaian1;