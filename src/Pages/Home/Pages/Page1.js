import React from "react";
import { useParallax } from "react-scroll-parallax";
import El1 from '../../../Assets/Parallax/1.svg'
import El2 from '../../../Assets/Parallax/2.webp'
import El3 from '../../../Assets/Parallax/3.webp'
import El4 from '../../../Assets/Parallax/4.webp'
import El5 from '../../../Assets/Parallax/5.webp'
import El6 from '../../../Assets/Parallax/6.webp'
import El7 from '../../../Assets/Parallax/7.webp'
import El8 from '../../../Assets/Parallax/8.webp'
import './Page1.css';
import {ReactComponent as Logo} from '../../../Assets/Logo/logohome.svg'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useParallaxController } from 'react-scroll-parallax';
import {useLocation} from 'react-router-dom'

const Page1 = () => {
    let isMobile = (window.innerWidth < 768);
    const layerClass = 'position-absolute w-100 d-flex justify-content-center';
    const layerStyle = {zIndex:'-2',overflowX:'hidden'};

    const location = useLocation();
    const parallaxController = useParallaxController();
  
    useEffect(() => {
      parallaxController.update();
    }, [location.pathname,parallaxController]);

    const pEffect = (start,end) =>{
        return ({
            translateY:[`${start}px`,`${end}px`],
            shouldAlwaysCompleteAnimation:true,
            disabled : (isMobile ? true : false)
        });
    }

    return(
        <div>        
        <div className='d-flex align-items-end justify-content-center parallax-wrapper'>
            <div ref={useParallax(pEffect(0,800)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El1} alt='imgparallax' onLoad={()=>parallaxController.update()}></img>
            </div>
            <div ref={useParallax(pEffect(0,700)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El2} alt='imgparallax' onLoad={()=>parallaxController.update()}></img>
            </div>
            <div ref={useParallax(pEffect(0,600)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El3} alt='imgparallax' onLoad={()=>parallaxController.update()}></img>
            </div>
            <motion.div 
                initial={{opacity:0,scale:1.2}} 
                animate={{opacity:1,scale:1}} 
                transition={{duration:1,type:'tween',ease:'circOut'}} 
                className="align-self-start mx-lg-0 mx-5" 
                ref={useParallax({...pEffect(0,700),scale:[1,0.7],opacity:[1,0]}).ref} 
                style={{marginTop:'15vh',zIndex:'-2'}} 
                onLoad={()=>parallaxController.update()}>
                <Logo className="w-100"/>
            </motion.div>
            <div ref={useParallax(pEffect(0,500)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El4} alt='imgparallax' onLoad={()=>parallaxController.update()}></img>
            </div>
            <div ref={useParallax(pEffect(0,350)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El5} alt='imgparallax' onLoad={()=>parallaxController.update()}></img>
            </div>
            <div ref={useParallax(pEffect(0,200)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El6} alt='imgparallax' onLoad={()=>parallaxController.update()}></img>
            </div>
            <div ref={useParallax(pEffect(0,100)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El7} alt='imgparallax' onLoad={()=>parallaxController.update()}></img>
            </div>
        </div>        
        <div style={{height:'30vh',zIndex:'2'}}>
            <div className={'position-relative w-100 d-flex justify-content-center parallax-cover'} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El8} alt='imgparallax'></img>
            </div>
        </div>
        </div>
    );
}

export default Page1;