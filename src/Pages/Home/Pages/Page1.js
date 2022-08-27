import React, { useEffect } from "react";
import { useParallax, useParallaxController} from "react-scroll-parallax";
import Layer1 from '../../../Assets/Parallax/Layer1.svg';
import El2 from '../../../Assets/Parallax/2.svg'
import El3 from '../../../Assets/Parallax/3.svg'
import El4 from '../../../Assets/Parallax/4.svg'
import El5 from '../../../Assets/Parallax/5.svg'
import El8 from '../../../Assets/Parallax/8.svg'
import './Page1.css';
import logo from '../../../Assets/Logo/logohome.webp'
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
        <div className='d-flex align-items-end justify-content-center parallax-wrapper'>
            <img ref={useParallaxSpeed(0,500)} className='position-absolute parallax-layer' src={Layer1} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,425)} className='position-absolute parallax-layer' src={El2} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,350)} className='position-absolute parallax-layer' src={El3} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,275)} className='position-absolute parallax-layer' src={El4} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,200)} className='position-absolute parallax-layer' src={El5} alt="pic" onLoad={updateController}></img>
            <img className='position-absolute' src={El8} alt="pic"></img>
            <div className="d-flex align-self-start flex-column justify-content-center mx-0 mt-5 pt-5">
                <span style={{backgroundImage:`url(${logo})`,height:'248px',width:'495px'}} className='logo-home'/>
                <section className="d-flex align-items-center flex-column mt-5 explore">
                    <h5 className="m-0">Scroll to Explore !</h5>
                    <i className="h4 fa-solid fa-angle-down"/>
                </section>                
            </div>
        </div>        
    </> 
    );
}

export default Page1;