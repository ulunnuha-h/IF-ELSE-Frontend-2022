import React from "react";
import Recent from "./Recent/Recent.js"
import Search from "./Search/Search.js"
import './Style.css'

const News = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 overflow">
                    <Recent></Recent>
                </div>
                <div className="col-12 overflow">
                    <Search></Search>
                </div>
            </div>
        </div>
    );
}

export {News};