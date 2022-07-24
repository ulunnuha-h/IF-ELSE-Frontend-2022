import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Perizinan = () => {
    const nav = useNavigate();
    const [rangkaian,setRangkaian] = useState(1);
    
    return(
        <div>
            <ul className="nav nav-tabs mb-2">
              <li className="nav-item">
                <span className={rangkaian === 1 ? "nav-link active":"nav-link"} style={{"cursor":"pointer"}} onClick={()=>{setRangkaian(1);nav('1')}}>Rangkaian 1</span>
              </li>
              <li className="nav-item">
                <span className={rangkaian === 2 ? "nav-link active":"nav-link"} style={{"cursor":"pointer"}} onClick={()=>{setRangkaian(2);nav('2')}}>Rangkaian 2</span>
              </li>
              <li className="nav-item">
                <span className={rangkaian === 3 ? "nav-link active":"nav-link"} style={{"cursor":"pointer"}} onClick={()=>{setRangkaian(3);nav('3')}}>Rangkaian 3</span>
              </li>
            </ul>
            <Outlet/>
        </div>
    );
}

export default Perizinan;