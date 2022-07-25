import React, { useState } from "react";
import './FriendCard.css';
import FriendCardBig from "./FriendCard-Big";
import { AnimatePresence } from "framer-motion";

const FriendCard = (props) => {
    const data = (props.data ? props.data : {Name : "tidak ada",
    Nickname : "tidak ada",
    Address : "tidak ada",
    Line : "tidak ada",
    Avatar : "https://divedigital.id/wp-content/uploads/2021/10/1-min.png",
    About : 'tidak ada'})
    const [pop,setPop] = useState(true);

    const toggle = () => {
        setPop(!pop);
    }

    return(
        <div className="card-container" >
            <div className="card-base" onClick={toggle}>
                <div className="front d-flex flex-column align-items-center justify-content-center">
                    <div className="profile-pic" style={{backgroundImage:`url(${data.Avatar})`,backgroundSize:"cover"}}>
                    </div>
                    <h3>{data.Nickname}</h3>
                </div>
                <div className="back d-flex flex-column justify-content-center">
                    <h6>{data.Name}</h6>
                    <strong className="my-2">ID LINE : {data.Line}</strong>
                    <p>{data.About}</p>
                </div>
            </div>
            <AnimatePresence>
                {pop ? null : <FriendCardBig toggle = {toggle} data ={data}/>}
            </AnimatePresence>
        </div>
    );
}

export default FriendCard;