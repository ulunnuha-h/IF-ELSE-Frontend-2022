import React, { useState } from "react";
import './FriendCard.css';
import FriendCardBig from "./FriendCard-Big";
import { AnimatePresence } from "framer-motion";

const FriendCard = (props) => {
    const data = props?.data;
    const [pop,setPop] = useState(true);

    const toggle = () => {
        setPop(!pop);
    }

    return(
        <div className="card-container" >
            <div className="card-base" onClick={toggle}>
                <div className="front d-flex flex-column align-items-center justify-content-center">
                    <div className="profile-pic" style={{backgroundImage:`url(${data.avatar})`,backgroundSize:"cover"}}>
                    </div>
                    <h3 className="mx-2 text-center">{data.nickname}</h3>
                </div>
                <div className="back d-flex flex-column justify-content-center">
                    <h6>{data.nama}</h6>
                    <strong className="my-2">ID LINE : {data.line}</strong>
                    <p>{data.about}</p>
                </div>
            </div>
            <AnimatePresence>
                {pop ? null : <FriendCardBig toggle = {toggle} data ={data}/>}
            </AnimatePresence>
        </div>
    );
}

export default FriendCard;