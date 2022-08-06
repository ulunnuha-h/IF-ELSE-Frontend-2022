import React from 'react';
import Slider from "react-slick";
import "./Recent.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NewsRecent from './News-recent.js';
import { motion } from 'framer-motion';
import { getBeritaTerbaru } from '../../../Data/Berita';

const Recent = () => {

    const allData = getBeritaTerbaru();

    const settings = {
        dots: true,   
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true,
        autoplaySpeed : 3000
    };

    return (
        <motion.div 
            className='mt-3 mx-2' 
            initial={{opacity:0,scale:0.9}} 
            whileInView={{opacity:1,scale:1}}
            transition={{type:'tween',ease:'circOut'}}>
            <Slider {...settings}>
                {allData.map(data => <NewsRecent key={data.id} {...data} />)}                
            </Slider>
        </motion.div>
    );  
}


// const ImageSlider = ({ slides }) => {
//     const [current, setCurrent] = useState(0)
//     const length = slides.length

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1)
//     }

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1)
//     }

//     console.log(current);

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }
// }

// function Recent() { 
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         initialSlide: 0,
//         autoplay: true,
//         autoplaySpeed: 4000,
//         pauseOnHover: true,
//     };

//     return (
//         <div classNameName="container-fluid recent">
//             <div classNameName="row">
//                 <Slider {...settings}>
//                     {
//                         data.map((val) =>
//                             <div classNameName="news-recent" key={val.id}>
//                                 <div classNameName="col-12 images-recent">
//                                     <img src={Test} alt="" classNameName="image-recent"></img>
//                                 </div>
//                                 <div classNameName="col-12">
//                                     <h1>{val.judul}</h1>
//                                 </div>
//                                 <div classNameName="col-12">
//                                     <p classNameName="detail-recent">{val.detail}</p>
//                                 </div>
//                                 <div classNameName="row">
//                                     <div classNameName="col-6 col-sm-6">
//                                         <p classNameName="tanggal-recent">{val.tanggal}</p>
//                                     </div>
//                                     <div classNameName="col-6 col-sm-6">
//                                         <Link to={`/news/${val.judul}`} classNameName="link-recent">
//                                             <p classNameName="read-recent">Read more {'>'}</p>
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </div>
//                         )
//                     }
//                 </Slider>
//             </div>
//         </div>
//     )
// }

export default Recent;