import React, { useState } from "react";
import {Outlet, useNavigate, useParams} from "react-router-dom";

const cursor = {
  style : { cursor : 'pointer' }
}

const idRangkaian = [1,2,3,4];

const AdminRangkaian = () => {
    const nav = useNavigate();
    const rangkaian = parseInt(useParams().id);
    const handleRangkaian = (id) => nav(`${id}`);
    const navStyle = (id) => (id === rangkaian ? "nav-link active" : "nav-link");

    return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light h-100">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List Rangkaian</h3>
            </div>
            <ul className="nav nav-tabs mb-2">
                {idRangkaian.map((id,idx) => 
                    <li key={idx} className="nav-item">
                        <span {...cursor} className={navStyle(id)} onClick={()=>handleRangkaian(id)}>Rangkaian {id}</span>
                    </li>
                )}
            </ul>
            <Outlet/>
        </div>
    );
}

export default AdminRangkaian;