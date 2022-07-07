import React, { useContext } from "react";
import { Auth } from "../../Config/Auth";
import './UserCard.css'

const UserCard = () => {
    const userData = useContext(Auth).getUserData();

    return(
        <div className="user-card d-flex flex-column align-items-center justify-content-between">
            <div className="user-image">
                <img src={userData.img} alt="profilepicture" className="img-fluid"></img>
            </div>
            <h2>Hi, {userData.nickName}!</h2>
            <p>{userData.aboutMe}</p>
        </div>
    );
}

export default UserCard;