import React from 'react'
import './Contact.css'
import {Link} from 'react-router-dom'
import Gambar from './Gambar.png'

function Contact() {
    return (
        <div class="table">
            <img src={Gambar} className="image" alt=""></img>
            <div class="another">
                <p>Have another questions?</p>
            </div>
            <Link to="" className="contact">
                <p>Contact Us</p>
            </Link>
        </div>
    )
}

export default Contact