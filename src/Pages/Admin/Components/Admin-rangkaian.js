import React, { useState } from "react";
import Perizinan from "./Admin-rangkaian/Admin-perizinan";
import Pendataan from "./Admin-rangkaian/Admin-pendataan";

const AdminRangkaian = () => {
    const [toggle,setToggle] = useState(true);
    const QE = true;

    if(!QE) return(
        <div className="d-flex align-items-center justify-content-center h-100">
            <div className="alert alert-danger" role="alert">
                <i className="fa-solid fa-triangle-exclamation me-2"></i>
                Gaboleh kesini ya, kamu bukan QE
            </div>
        </div>
    );
    else return(
        <div className="m-4 p-4 bg-dark text-light h-100">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List {toggle? "Perizinan" : "Pendataan"}</h3>
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                    {toggle ? "Perizinan" : "Pendataan"}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="dropdown-item" style={{"cursor":"pointer"}} onClick={()=>setToggle(true)}>Perizinan</li>
                    <li className="dropdown-item" style={{"cursor":"pointer"}} onClick={()=>setToggle(false)}>Pendataan</li>
                  </ul>
                </div>
            </div>
            
            {toggle ?
            <Perizinan/>
            :
            <Pendataan/>
            }
        </div>
    );
}

export default AdminRangkaian;