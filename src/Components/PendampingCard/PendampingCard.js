import { motion } from "framer-motion";
import React from "react";
import './PendampingCard.css';

const PendampingCard = () => {
    return(
        <div
            className="pendamping-card row p-3" 
            style={{"width": "90%","borderRadius":"12px"}}>
            <div className="pendamping-img col-md-3 p-0 align-self-start rounded">
                <img className="img-fluid" src="https://drive.google.com/uc?export=view&id=1WPQoiaPabvw2sN-t53iT0mKpODmR03my" alt="gambarPendamping"></img>
            </div>
            <div className="col-md-9 d-flex flex-column" >
                <h5 className="mt-3">Name</h5>
                <span className="mx-3">Hanif Ulunnuha Hidayat</span>
                <h5 className="mt-3">ID Line</h5>
                <span className="mx-3">hanifulunnuha</span>
                <motion.button whileHover={{scale:1.05}} className="btn-pendamping align-self-end mt-3 px-4 py-2">Link Grup</motion.button>
            </div>
        </div>
    );
}

export default PendampingCard;