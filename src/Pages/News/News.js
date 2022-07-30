import React from "react";
import Recent from "./Recent/Recent.js"
import Search from "./Search/Search.js"
import Bg from '../../Assets/background.svg'
import './Style.css'

const News = () => {
    return(
        <main style={{backgroundColor:'#ba4b00',zIndex:'-1',backgroundImage:`url(${Bg})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
        <div className="container-lg row w-100 m-auto">
                <div className="col-12">
                    <Recent></Recent>
                </div>
                <div className="col-12">
                    <Search></Search>
                </div>
        </div>
        </main>
    );
}

export {News};