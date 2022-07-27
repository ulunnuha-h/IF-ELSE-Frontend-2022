import React, {useState} from 'react';
import data from '../Data.js'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import Test from '../Images/Test.jpg'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "./Recent.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
}

function Recent() { 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
    };

    return (
        <div className="container-fluid recent">
            <div className="row">
                <Slider {...settings}>
                    {
                        data.map((val) =>
                            <div className="news-recent" key={val.id}>
                                <div className="col-12 images-recent">
                                    <img src={Test} alt="" className="image-recent"></img>
                                </div>
                                <div className="col-12">
                                    <h1>{val.judul}</h1>
                                </div>
                                <div className="col-12">
                                    <p className="detail-recent">{val.detail}</p>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-sm-6">
                                        <p className="tanggal-recent">{val.tanggal}</p>
                                    </div>
                                    <div className="col-6 col-sm-6">
                                        <Link to={`/news/${val.judul}`} className="link-recent">
                                            <p className="read-recent">Read more {'>'}</p>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Recent;