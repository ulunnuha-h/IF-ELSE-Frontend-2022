import React from "react";
import bg from '../../../Assets/Page3/Page3.svg';
import bgCover from '../../../Assets/Page3/Page3Cover.webp'
import './Page1.css';
import './Page3.css';
import About from "./Components/AboutIfElse";

const Page3 = () => {

    return(
        <>
        <div>
            <div className="w-100 text-light position-absolute p-1 p-lg-5" style={{zIndex:'1',height:'100vh',overflow:'hidden'}}>
                <div className="h-100 page3 d-flex flex-column align-items-center gap-5" style={{opacity:'0.8',borderRadius:'24px',overflow:'hidden'}}>
                    <h2 className="judul">ABOUT IF ELSE</h2>
                    <About/>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center" style={{height:('105vh'),backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundPosition:'center',zIndex:'-2',overflow:'hidden'}}>
                <img className="w-100" src={bg} alt='imgparallax' style={{zIndex:'0'}}></img>
            </div>
            <div style={{height:'29vh',zIndex:'0'}}>
                <div className={'position-relative w-100 d-flex justify-content-center parallax-cover'} style={{overflowX:'hidden',top:'-400%'}} >
                    <img style={{minWidth:'1280px'}} src={bgCover} alt='imgparallax'></img>
                </div>
            </div>
        </div>
        </>
    );
}

export default Page3;