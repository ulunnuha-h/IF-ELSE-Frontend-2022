import React from "react";
import {Link} from 'react-router-dom'
import {ReactComponent as Element} from '../../Assets/404.svg'

const Error404 = () =>{
    return(
    <main style={{backgroundColor:'var(--color-font)'}}>
        <div className="d-flex container-lg flex-column align-items-center justify-content-center" style={{"height":"100vh"}}>
            <Element className="h-auto w-50"/>
            <p className="my-2 text-white">Hayo nyari apa kamu disini ? nyasar ya</p>
            <Link to="/">Mau Pulang aja☹️</Link>
        </div>
    </main>
    );
}

export default Error404;