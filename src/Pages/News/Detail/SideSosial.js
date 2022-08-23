import React from "react";
import icon from "./Icon";
import './Detail.css'

const SideSosial = () => {
    const ICON = icon;

    return(
        <div className="contact-detail p-3 d-lg-flex flex-column d-none">
            {
                ICON && ICON.map((val,idx) =>
                    <a key={idx} href={val.link} target="blank" className="my-2">
                        {val.icon}
                    </a>
                )
            }
        </div>
    );
}

export default SideSosial;