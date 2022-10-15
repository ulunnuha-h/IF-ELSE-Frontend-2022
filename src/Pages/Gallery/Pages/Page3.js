import React from "react";
import bg from '../../../Assets/Page3/Desert3.svg'


const Page3 = () => {
    return(
        <div className="pt-5 d-flex align-items-end" style={{background:'linear-gradient(#822600,#F5C878)'}}>
            <section className="position-absolute h-100 w-100" style={{left:'0',backgroundImage:`url(${bg})`,backgroundSize:'cover',zIndex:0,backgroundPosition:'center'}}/>
        </div>
    );
}

export default Page3;