import React, { useState } from "react";
import { useParallax } from "react-scroll-parallax";
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
import { motion } from 'framer-motion';

const Page1 = (props) => {
    let isMobile = (window.innerWidth < 768);
    let [explore,setExplore] = useState(false);
    const layerClass = 'position-absolute w-100 d-flex justify-content-center';
    const layerStyle = {zIndex:'-2',overflowX:'hidden'};

    setTimeout(()=>{
        setExplore(true);
    },3000)

    const pEffect = (start,end) =>{
        return ({
            translateY:[`${start}px`,`${end}px`],
            shouldAlwaysCompleteAnimation:true,
            disabled : (isMobile ? true : false)
        });
    }

    return(
        <div style={{height:'200vh'}}>        
        <div className='d-flex align-items-end justify-content-center parallax-wrapper w-100'>
            <div ref={useParallax(pEffect(-10,750)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El1} alt='imgparallax'></img>
            </div>
            <div ref={useParallax(pEffect(0,700)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El2} alt='imgparallax' ></img>
            </div>
            <div ref={useParallax(pEffect(0,600)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El3} alt='imgparallax' ></img>
            </div>
            <div ref={useParallax(pEffect(0,500)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El4} alt='imgparallax' ></img>
            </div>
            <div ref={useParallax(pEffect(0,350)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El5} alt='imgparallax' ></img>
            </div>
            <div ref={useParallax(pEffect(0,200)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El6} alt='imgparallax' ></img>
            </div>
            <div ref={useParallax(pEffect(0,100)).ref} className={layerClass} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El7} alt='imgparallax' ></img>
            </div>
            <motion.div 
                initial={{opacity:0,scale:1.2}} 
                animate={{opacity:1,scale:1}} 
                transition={{duration:1,type:'tween',ease:'circOut'}} 
                className="align-self-start mx-lg-0 mx-5" 
                ref={useParallax({opacity:[1,0],shouldAlwaysCompleteAnimation:true}).ref} 
                style={{marginTop:'15vh',zIndex:'-2'}} 
                >
                <Logo className="w-100"/>
                <section className="d-flex justify-content-center align-items-center flex-column mt-5 mb-0" style={{opacity:(explore ? 1 : 0),transition:'500ms'}}>
                    <h5 className="m-0 text-dark">Scroll to Explore !</h5>
                    <img src={scroll} alt='scroll' style={{width:'60px'}}></img>
                </section>                
            </motion.div>
        </div>        
        <div style={{height:'28vh',zIndex:'2'}}>
            <div className={'position-relative w-100 d-flex justify-content-center parallax-cover'} style={layerStyle} >
                <img style={{minWidth:'1280px'}} src={El8} alt='imgparallax' onLoad={()=>props.setLoading(false)}></img>
            </div>
        </div>
        </div>
    );
}

export default Page1;