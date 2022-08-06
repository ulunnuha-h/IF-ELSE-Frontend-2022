import React from "react";
import icon from "./Icon";
import { Link } from "react-router-dom";
import './Detail.css'

const SideSosial = () => {
    const ICON = icon;

    return(
        <div className="contact-detail p-3 d-lg-flex flex-column d-none">
            {
                ICON && ICON.map((val,idx) =>
                    <Link key={idx} to="/narahubung" className="my-2">
                        {val.icon}
                    </Link>
                )
            }
        </div>
    );
}

export default SideSosial;