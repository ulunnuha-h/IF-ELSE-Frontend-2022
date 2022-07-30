import React, { useEffect } from "react";
import { useParallax, useParallaxController} from "react-scroll-parallax";
import El1 from '../../../Assets/Parallax/1.svg'
import El2 from '../../../Assets/Parallax/2.svg'
import El3 from '../../../Assets/Parallax/3.webp'
import El4 from '../../../Assets/Parallax/4.webp'
import El5 from '../../../Assets/Parallax/5.webp'
import El6 from '../../../Assets/Parallax/6.webp'
import El7 from '../../../Assets/Parallax/7.webp'
import El8 from '../../../Assets/Parallax/8.svg'
import scroll from '../../../Assets/scroll.gif'
import './Page1.css';
import {ReactComponent as Logo} from '../../../Assets/Logo/logohome.svg'
import { useLocation } from "react-router-dom";

const Page1 = () => {
    let isMobile = (window.innerWidth < 768);
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

    return(  
    <>
        <div className='d-flex align-items-end justify-content-center parallax-wrapper'>
            <img ref={useParallaxSpeed(0,500)} className='position-absolute' src={El1} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,480)} className='position-absolute' src={El2} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,410)} className='position-absolute' src={El3} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,350)} className='position-absolute' src={El4} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,280)} className='position-absolute' src={El5} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,160)} className='position-absolute' src={El6} alt="pic" onLoad={updateController}></img>
            <img ref={useParallaxSpeed(0,100)} className='position-absolute' src={El7} alt="pic" onLoad={updateController}></img>
            <img className='position-absolute' src={El8} alt="pic"></img>
            <div className="align-self-start mx-lg-0 mx-5 mt-5 pt-5">
                <Logo className="w-100"/>
                <section className="d-flex align-items-center flex-column mt-5 explore">
                    <h5 className="m-0 text-dark">Scroll to Explore !</h5>
                    <img src={scroll} alt='scroll'></img>
                </section>                
            </div>
        </div>        
    </> 
    );
}

export default Page1;