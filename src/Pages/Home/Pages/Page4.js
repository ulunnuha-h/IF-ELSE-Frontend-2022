import React from "react";
import bg from '../../../Assets/Page4/Page4.svg';
import SunLogo from '../../../Assets/Page4/Logo.svg';
import bgCover from '../../../Assets/Page4/Page4Cover.webp'
import './Page1.css';
import './Page4.css';
import Philosophy from "./Components/Philoshopy";

const Page4 = () => {

    return(
        <>
        <div>
            <div className="w-100 text-light position-absolute p-1 p-lg-5" style={{zIndex:'1',height:'100vh',overflow:'hidden'}}>
                <div className="h-100 d-flex flex-column align-items-center" style={{borderRadius:'24px',overflow:'hidden'}}>
                    <h2 className="judul">LOGO PHILOSOPHY</h2>
                    <div className="d-flex the-filosofi">
                        <Philosophy/>
                        <img src={SunLogo}alt='logo-ifelse'/>
                    </div>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-center" style={{height:('105vh'),backgroundSize:'cover',backgroundRepeat:"no-repeat",backgroundPosition:'center',zIndex:'-2',overflow:'hidden'}}>
                <img src={bg} alt='imgparallax' style={{zIndex:'0',width:'100vw'}}></img>
            </div>
            <div style={{height:'30vh',zIndex:'0'}}>
                <div className={'position-relative w-100 d-flex justify-content-center parallax-cover-4'} style={{overflowX:'hidden'}} >
                    <img style={{minWidth:'1280px'}} src={bgCover} alt='imgparallax'></img>
                </div>
            </div>
        </div>
        </>
    );
}

export default Page4;