import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
import Gambar from './Gambar.png'

function Contact() {
    return (
            <div className="table">
                <img src={Gambar} className="image" alt=""></img>
                <div className="text-contact">
                    <p>Have another questions?</p>
                </div>
                <Link to="/narahubung" className="button-contact">
                    <p>Contact Us</p>
                </Link>
            </div>
    )
}

export default Contact