import React, { useEffect } from "react";
import { useParallax, useParallaxController} from "react-scroll-parallax";
import El5 from '../../../Assets/Parallax/5.svg'
import El8 from '../../../Assets/Parallax/8.svg'
import videoBG from '../../../Assets/Gallery/BGRangkaian1.mp4'
import './Page1.css';
import { useLocation } from "react-router-dom";

const isMobile = (window.innerWidth < 768);

const Page1 = () => {    
    const location = useLocation();
    const parallaxController = useParallaxController();

    const updateController = () => parallaxController.update();

    useEffect(() => {
        parallaxController.update();
    }, [location.pathname,parallaxController]);
    

    const useParallaxSpeed = (start,end) => {
        const parallax = useParallax({
            translateY:[`${start}px`,`${end}px`],
            shouldAlwaysCompleteAnimation:true,
            disabled: isMobile
        })
        return parallax.ref;
    }

    return(  
    <>
        <div className='d-flex align-items-end justify-content-left parallax-wrapper-gallery bg-gallery'>
            <video src={videoBG} className='position-absolute videoGallery' autoPlay loop muted></video>
            <img ref={useParallaxSpeed(0,200)} className='position-absolute parallax-layer sand-gallery' src={El5} alt="pic" onLoad={updateController}></img>
            <img className='position-absolute sand-gallery' src={El8} alt="pic"></img>
            <div className="d-flex align-self-start flex-column justify-content-left mx-5 mt-5 pt-5">
                <section className="d-flex align-items-left flex-column mt-5 gallery">
                    <h1 className="mx-5 text-white display-1">GALLERY <br></br>IF ELSE 2022</h1>
                </section> 
            </div>
        </div>        
    </> 
    );
}

export default Page1;