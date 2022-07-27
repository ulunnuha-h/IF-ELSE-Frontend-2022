import React from "react";
import { useParallax} from "react-scroll-parallax";
import El1 from '../../../Assets/Parallax/1.svg'
import El2 from '../../../Assets/Parallax/2.webp'
import El3 from '../../../Assets/Parallax/3.webp'
import El4 from '../../../Assets/Parallax/4.webp'
import El5 from '../../../Assets/Parallax/5.webp'
import El6 from '../../../Assets/Parallax/6.webp'
import El7 from '../../../Assets/Parallax/7.webp'
import El8 from '../../../Assets/Parallax/8.webp'
import scroll from '../../../Assets/scroll.gif'
import './Page1.css';
import {ReactComponent as Logo} from '../../../Assets/Logo/logohome.svg'

const Page1 = (props) => {
    let isMobile = (window.innerWidth < 768);

    const loaded = () => props.setLoading(false);

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
            <img ref={useParallaxSpeed(0,800)} className='position-absolute' src={El1} alt="pic"></img>
            <img ref={useParallaxSpeed(0,700)} className='position-absolute' src={El2} alt="pic"></img>
            <img ref={useParallaxSpeed(0,600)} className='position-absolute' src={El3} alt="pic"></img>
            <img ref={useParallaxSpeed(0,500)} className='position-absolute' src={El4} alt="pic"></img>
            <img ref={useParallaxSpeed(0,400)} className='position-absolute' src={El5} alt="pic"></img>
            <img ref={useParallaxSpeed(0,300)} className='position-absolute' src={El6} alt="pic"></img>
            <img ref={useParallaxSpeed(0,200)} className='position-absolute' src={El7} alt="pic"></img>
            <div className="align-self-start mx-lg-0 mx-5 mt-5 pt-5">
                <Logo className="w-100"/>
                <section className="d-flex align-items-center flex-column mt-5 explore">
                    <h5 className="m-0 text-dark">Scroll to Explore !</h5>
                    <img src={scroll} alt='scroll'></img>
                </section>                
            </div>
        </div>        
        <div className='parallax-cover-1'>
            <img src={El8} alt='imgparallax' onLoad={loaded}></img>
        </div>
    </> 
    );
}

export default Page1;