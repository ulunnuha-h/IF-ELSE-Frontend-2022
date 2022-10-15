import React from "react";
import './GalleryR1.css';
import dataP from '../Data/PhotoR1'
import { indexOf } from "lodash";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Rangkaian1 = () => {

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    const photo = dataP.map(item=>
        <img key={indexOf(item)+1} 
        src={item}
        id="the--photo" 
        className="col-lg-4 col-md-6 col-sm-9"
        />
    
        
    )
    return(
        <div className="container-G align-items center container">
            <h2>RANGKAIAN 1</h2>
            <p>"LIGHT UP THE TORCH, EXPLORE A WHOLE NEW WORLD"</p>
            <LightGallery
            elementClassNames="d-flex row display"
            onInit={onInit}
            speed={500}
            thumbnail={false}
            plugins={[lgThumbnail, lgZoom]}>
            {photo}
            </LightGallery>
        </div>)
}

export default Rangkaian1;