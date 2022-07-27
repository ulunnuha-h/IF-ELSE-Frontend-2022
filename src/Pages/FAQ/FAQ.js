import React from "react";
import Display from "./Display/Display.js"
import Contact from "./Contact/Contact.js"

const FAQ = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-9">
                    <Display></Display>
                </div>
                <div className="col-12 col-lg-3">
                    <Contact></Contact>
                </div>
            </div>
        </div>
    );
}

export default FAQ;