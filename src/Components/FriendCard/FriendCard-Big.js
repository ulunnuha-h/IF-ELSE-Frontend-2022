import React from "react";
import pic from '../../Assets/me.jpeg';

const FriendCardBig = (props) => {
    return(
        <div className="d-flex justify-content-center" id="friend-card-modal">
            <div className="friend-card-content m-auto">
                <div className="d-flex justify-content-between mx-3 mt-1 ">
                    <h2>Hanif Ulunnuha Hidayat</h2>
                    <i className="fa-solid fa-x h2" style={{"cursor":"pointer"}} onClick={props.toggle}></i>
                </div>
                <hr></hr>
                <div className="position-fixed w-75 h-75"></div>
                <div className="row m-1">
                    <div className="col-md-5">
                        <img className="img-fluid rounded" src={pic} alt='profilepic'></img>
                    </div>
                    <div className="col-md-7 p-4 ">
                        <h5 className="d-md-block d-none">Name</h5>
                        <span className="d-md-block d-none">Hanif Ulunnuha Hidayat</span>
                        <h5 className="d-md-block d-none">Nickname</h5>
                        <span className="d-md-block d-none">Hanif</span>
                        <h5 className="d-md-block d-none">Address</h5>
                        <span className="d-md-block d-none">Sumenep, Jawa Timur</span>
                        <h5 className="d-md-block d-none">ID Line</h5>
                        <span className="d-md-block d-none">hanifulunnuha</span>
                        <h5>About me</h5>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim vitae diam pellentesque aliquet. Cras porttitor dictum lorem in pretium. </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FriendCardBig;