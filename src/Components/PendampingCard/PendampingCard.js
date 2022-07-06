import React from "react";

const PendampingCard = () => {
    return(
        <div
            className="bg-primary row p-3" 
            style={{"width": "90%","borderRadius":"24px"}}>
            <div className="col-md-3 bg-warning" style={{"height":"200px","borderRadius":"12px"}}>
            </div>
            <div className="col-md-9 d-flex flex-column" >
                <h5 className="mt-3">Name</h5>
                <span className="h4 mx-3">Hanif Ulunnuha Hidayat</span>
                <h5 className="mt-3">ID Line</h5>
                <span className="h4 mx-3">hanifulunnuha</span>
                <button className="btn btn-warning align-self-end mt-3">Link Grup</button>
            </div>
        </div>
    );
}

export default PendampingCard;