import React from "react";
import './FriendCard.css';

const FriendCard = () => {
    return(
        <div className="card-container">
            <div className="card-base">
                <div className="front d-flex flex-column align-items-center">
                    <div className="profile-pic"></div>
                    <h1>Hanif</h1>
                </div>
                <div className="back d-flex flex-column">
                    <h3>Hanif Ulunnuha Hidayat</h3>
                    <strong className="my-3">ID LINE : hanifulunnuha</strong>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium.</p>
                </div>
            </div>
        </div>
    );
}

export default FriendCard;