import React, { useState } from "react";
import './FriendCard.css';
import FriendCardBig from "./FriendCard-Big";

const FriendCard = () => {

    const [pop,setPop] = useState(true);

    const toggle = () => {
        setPop(!pop);
    }

    return(
        <div className="card-container" >
            <div className="card-base" onClick={toggle}>
                <div className="front d-flex flex-column align-items-center justify-content-center">
                    <div className="profile-pic">
                        <img src="https://drive.google.com/uc?export=view&id=1WPQoiaPabvw2sN-t53iT0mKpODmR03my" className="h-100" alt='profilpic'></img>
                    </div>
                    <h3>Hanif</h3>
                </div>
                <div className="back d-flex flex-column justify-content-center">
                    <h5>Hanif Ulunnuha Hidayat</h5>
                    <strong className="my-2">ID LINE : hanifulunnuha</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.</p>
                </div>
            </div>
            {pop ? null : <FriendCardBig toggle = {toggle}/>}
        </div>
    );
}

export default FriendCard;