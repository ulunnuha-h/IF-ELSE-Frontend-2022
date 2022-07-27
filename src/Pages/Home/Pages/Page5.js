import React from "react";
import bg from '../../../Assets/Page5/Page5.svg';
import './Page1.css';
import './Page5.css';
import Rangkaians from "./Components/Rangkaians";

const Page5 = () => {

    return(
        <>
        <div>
            <div className="w-100 text-light position-absolute p-1 p-lg-5" style={{zIndex:'1',height:'90vh',overflow:'hidden'}}>
                <div className="h-200 d-flex flex-column align-items-center" style={{borderRadius:'24px',overflow:'hidden'}}>
                    <h2 className="judul">RANGKAIAN IF ELSE 2022</h2>
                    <Rangkaians/>
                </div>
            </div>
            <div className="position-relative parallax-cover-5" style={{backgroundImage:`url(${bg})`}} >
            </div>
        </div>
        </>
    );
}

export default Page5;