import React, { useState } from "react";
import './FriendCard.css';
import FriendCardBig from "./FriendCard-Big";
import { AnimatePresence } from "framer-motion";

const FriendCard = (props) => {
    const data = (props.data ? props.data : {name : "tidak ada",
    nickName : "tidak ada",
    address : "tidak ada",
    idLine : "tidak ada",
    img : "https://divedigital.id/wp-content/uploads/2021/10/1-min.png",
    aboutMe : 'tidak ada'})
    const [pop,setPop] = useState(true);

    const toggle = () => {
        setPop(!pop);
    }

    return(
        <div className="card-container" >
            <div className="card-base" onClick={toggle}>
                <div className="front d-flex flex-column align-items-center justify-content-center">
                    <div className="profile-pic" style={{backgroundImage:`url(${data.img})`,backgroundSize:"cover"}}>
                    </div>
                    <h3>{data.nickName}</h3>
                </div>
                <div className="back d-flex flex-column justify-content-center">
                    <h6>{data.name}</h6>
                    <strong className="my-2">ID LINE : {data.idLine}</strong>
                    <p>{data.aboutMe}</p>
                </div>
            </div>
            <AnimatePresence>
                {pop ? null : <FriendCardBig toggle = {toggle} data ={data}/>}
            </AnimatePresence>
        </div>
    );
}

export default FriendCard;