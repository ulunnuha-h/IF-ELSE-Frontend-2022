import React from 'react'
import './Narahubung.css'
import Logo from "../../../Assets/Logo/logo-ifelse.png"
import CP from "./Cp"
import Bg from '../../../Assets/background.svg'

function Narahubung() {
    return (
        <main className='pb-5' style={{backgroundColor:'#ba4b00',zIndex:'-1',backgroundImage:`url(${Bg})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
        <div className="container-lg narahubung-style">
            <div className="row">
                <div className="col-12 col-sm-6 d-flex justify-content-lg-end">
                    <img src={Logo} alt="" className="logo-narahubung"/>
                </div>
                <div className="col-12 col-sm-6 d-flex align-items-end">
                    <p className="thumbnail-narahubung w-100">IF ELSE<br></br>2022</p>
                </div>
                <div className="col-12 garis-narahubung"></div>
                <div className="col-12">
                    <p className="person-narahubung">Contact Us</p>
                </div>
                <div className="col-12">
                    {
                        CP && CP.map((val,idx) =>
                            <a key={idx} className="row cp-narahubung" href={val.link} target="blank">
                                <div className="col-2">
                                    {val.icon}
                                </div>
                                <div className="col-10">
                                    <p className="text-narahubung">{val.id}</p>
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
        </main>
    )
}

export default Narahubung

