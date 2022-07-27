import React from "react";
import bg from '../../../Assets/Page5/Page5.svg';
import './Page1.css';

const Page5 = () => {

    return(
        <>
        <div>
            <div className="w-100 text-light position-absolute p-1 p-lg-5" style={{zIndex:'1',height:'90vh',overflow:'hidden'}}>
                <div className="bg-dark h-100" style={{opacity:'0.8',borderRadius:'24px',overflow:'hidden'}}>
                    
                </div>
            </div>
            <div className="position-relative parallax-cover-5" style={{backgroundImage:`url(${bg})`}} >
            </div>
        </div>
        </>
    );
}

export default Page5;