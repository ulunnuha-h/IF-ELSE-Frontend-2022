import React, { useEffect } from "react";
import { useParallax, useParallaxController} from "react-scroll-parallax";
import El1 from '../../../Assets/Parallax/1.webp'
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
        updateController();
    }, [location.pathname]);
    

    const useParallaxSpeed = (start,end) => {
        const parallax = useParallax({
            translateY:[`${start}px`,`${end}px`],
            shouldAlwaysCompleteAnimation:true,
            disabled: isMobile
        })
        return parallax.ref;
    }

    // const data = [{end:500,src:El1},{end:480,src:El2},{end:410,src:El3},{end:350,src:El4},{end:280,src:El5},{end:160,src:El6},{end:100,src:El7}];

    return(  
    <>
        <div className='d-flex align-items-end justify-content-center parallax-wrapper'>
            <img ref={useParallaxSpeed(0,450)} className='position-absolute' src={El1} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,375)} className='position-absolute' src={El2} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,300)} className='position-absolute' src={El3} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,225)} className='position-absolute' src={El4} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,150)} className='position-absolute' src={El5} alt="pic" onLoad={updateController}></img>
            <img className='position-absolute' src={El8} alt="pic"></img>
            <div className="d-flex align-self-start flex-column justify-content-center mx-lg-0 mx-5 mt-5 pt-5">
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