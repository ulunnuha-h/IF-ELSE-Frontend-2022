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
                <div className="col-12 col-sm-6">
                    <img src={Logo} alt="" className="logo-narahubung"></img>
                </div>
                <div className="col-12 col-sm-6">
                    <p className="thumbnail-narahubung">IF ELSE<br></br>2022</p>
                </div>
                <div className="col-12 garis-narahubung"></div>
                <div className="col-12">
                    <p className="person-narahubung">Contact Person</p>
                </div>
                <div className="col-12">
                    {
                        CP && CP.map((val,idx) =>
                            <div key={idx} className="row cp-narahubung">
                                <div className="col-2">
                                    {val.icon}
                                </div>
                                <div className="col-10">
                                    <p className="text-narahubung">{val.id}</p>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
        </main>
    )
}

export default Narahubung