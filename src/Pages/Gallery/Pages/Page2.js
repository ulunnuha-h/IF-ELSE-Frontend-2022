import React from "react";
import './Page1.css';
import Recent from "../../News/Recent/Recent";
import {ReactComponent as Bg} from '../../../Assets/Page2/Desert2.svg'

const Page2 = () => {

    return(
        <div className="px-2 pt-5 w-100 d-flex align-items-end" style={{background:'linear-gradient(#451400,#F58000)',maxHeight:'90vh'}} >
            <Bg className="position-absolute" style={{left:'0'}}/>
            <main className="container-lg">
                <Recent/>
                {/* Nanti Recent nya diganti sama foto-foto rangkaian 1*/}
            </main>
        </div>
    );
}

export default Page2;