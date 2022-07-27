import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AdminRangkaian = () => {
    const nav = useNavigate();
    const loc = useLocation();

    return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light h-100">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List {loc.pathname.match('perizinan') ? "Perizinan" : "Pendataan"}</h3>
                <div className="dropdown">
                  <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
                    {loc.pathname.match('perizinan') ? "Perizinan" : "Pendataan"}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li className="dropdown-item" style={{"cursor":"pointer"}} onClick={()=>nav('perizinan/1')}>Perizinan</li>
                    <li className="dropdown-item" style={{"cursor":"pointer"}} onClick={()=>nav('pendataan/1')}>Pendataan</li>
                  </ul>
                </div>
            </div>
            <Outlet/>
        </div>
    );
}

export default AdminRangkaian;