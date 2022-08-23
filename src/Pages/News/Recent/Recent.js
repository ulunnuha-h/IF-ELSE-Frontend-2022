import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "./Recent.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NewsRecent from './News-recent.js';
import { motion } from 'framer-motion';
import { getBeritaTerbaru } from '../../../Data/Berita';

const Recent = () => {
    const [allData,setAllData] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getBeritaTerbaru()
        .then(res =>{
            if(res.data !== null)  setAllData(res.data);
            setLoading(false);
        });
    },[])

    const settings = {
        dots: true,   
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000
    };

    if(loading) return(
    <div style={{minHeight : '240px'}} className="d-flex justify-content-center p-5">
        <span className="profile-loader"/>
    </div>
    );

    return (
        <motion.div 
            className='mt-3 mx-2' 
            initial={{opacity:0,scale:0.9,y:100}} 
            whileInView={{opacity:1,scale:1,y:0}}
            transition={{type:'tween',ease:'circOut',delay:0.1}}
            style={{minHeight:"240px"}}>            
            <Slider {...settings}>
                {allData.map(data => <NewsRecent key={data.id} {...data} />)}                
            </Slider>
        </motion.div>
    );  
}


export default Recent;