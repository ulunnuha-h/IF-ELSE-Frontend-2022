import React from 'react'
import './Narahubung.css'
import Logo from "../../../Assets/Logo/logo-ifelse.png"
import CP from "./Cp"

function Narahubung() {
    return (
        <div className="container narahubung-style">
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
                        CP && CP.map((val) =>
                            <div className="row cp-narahubung">
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
    )
}

export default Narahubung