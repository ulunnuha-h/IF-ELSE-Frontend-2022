import React from "react";
import Display from "./Display/Display.js"
import Contact from "./Contact/Contact.js"
import Bg from '../../Assets/background.svg'

const FAQ = () => {
    return (
        <main style={{backgroundColor:'#ba4b00',zIndex:'-1',backgroundImage:`url(${Bg})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
            <div className="container-lg row m-auto">
                <div className="col-12 col-lg-8">
                    <Display/>
                </div>
                <div className="col-12 col-lg-4">
                    <Contact/>
                </div>
            </div>
        </main>
    );
}

export default FAQ;