import React from "react";
import { motion } from "framer-motion";

const FriendCardBig = (props) => {
    const data = props.data;

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="d-flex justify-content-center" id="friend-card-modal">
            <motion.div initial={{scale:0.8,y:100}} animate={{scale:1,y:0}} className="friend-card-content m-auto">
                <div className="d-flex justify-content-between mx-1 mx-md-3 mt-1 ">
                    <h2>{data.name}</h2>
                    <i className="fa-solid fa-x h2" style={{"cursor":"pointer"}} onClick={props.toggle}></i>
                </div>
                <hr></hr>
                <div className="position-fixed w-75 h-75"></div>
                <div className="row m-1">
                    <div className="col-md-5 p-0 p-md-4 bg-dark rounded" style={{backgroundImage:`url(${data.img})`,backgroundSize:"cover"}}>
                    </div>
                    <div className="col-md-7 p-0 p-md-4">
                        <h5 className="d-md-block d-none">Name</h5>
                        <span className="d-md-block d-none">{data.name}</span>
                        <h5 className="d-md-block d-none">Nickname</h5>
                        <span className="d-md-block d-none">{data.nickName}</span>
                        <h5 className="d-md-block d-none">Address</h5>
                        <span className="d-md-block d-none">{data.address}</span>
                        <h5 className="d-md-block d-none">ID Line</h5>
                        <span className="d-md-block d-none">{data.idLine}</span>
                        <h5>About me</h5>
                        <p>{data.aboutMe}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default FriendCardBig;