import { motion } from "framer-motion";
import React from "react";
import './PendampingCard.css';

const PendampingCard = (props) => {

    return(
        <motion.div
            className="pendamping-card row p-3" 
            style={{"width": "90%","borderRadius":"12px"}}
            initial={{rotateY:90}}
            whileInView={{rotateY:0}}
            transition={{duration:0.5}}>
            <div className="col-md-3 p-0 align-self-start rounded" style={{backgroundImage:`url(${props.data.link_foto})`,backgroundSize:"cover",aspectRatio:"1/1"}}/>
            <div className="col-md-9 d-flex flex-column" >
                <h5 className="mt-3">Name</h5>
                <span className="mx-3">{props.data.companion_name}</span>
                <h5 className="mt-3">ID Line</h5>
                <span className="mx-3">{props.data.id_line}</span>
                <a className="align-self-end" href={`//${props.data.line_group}`} target="blank"><motion.button whileHover={{scale:1.05}} className="btn-pendamping mt-3 px-4 py-2">Link Grup</motion.button></a>
            </div>
        </motion.div>
    );
}

export default PendampingCard;