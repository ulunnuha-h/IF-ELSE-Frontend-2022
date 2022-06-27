import React from "react";
import './UserCard.css'

const UserCard = () => {
    return(
        <div className="user-card d-flex flex-column align-items-center justify-content-between">
            <div className="user-image"></div>
            <h2>Hi, Hanif!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium. </p>
        </div>
    );
}

export default UserCard;