import React from 'react';
import IMAGES from '../Data.json'
import Test from '../Images/Test.jpg'
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import "./Recent.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Recent() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1.3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
    return (
        <>
            <Slider {...settings}>
                {
                    IMAGES && IMAGES.map((val) =>
                        <div key = {val.id} className="contentt">
                            <div className="frame">
                                <img src = {Test} className="gambar" alt=""></img>
                                <h1>{val.judul}</h1>
                                <p className="detailRecent">{val.detail}</p>
                                <p className="tanggalRecent">{val.tanggal}</p>
                                <Link to={'/val/${val._id}'} className="linkRecent">
                                    <p className="readRecent">Read more {'>'}</p>
                                </Link>
                            </div>
                        </div>
                    )
                }
                    
            </Slider>
        </>
    )
}

export default Recent;