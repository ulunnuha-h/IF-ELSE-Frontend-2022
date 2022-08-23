import React from "react";
import { useNavigate } from "react-router-dom";
import './Detail.css'

const SmallDetail = (props) => {
    const nav = useNavigate();
    const handleNav = () => {nav(`/news/${props.id}`);window.scroll(0,0)};
    const capt = (props.content.length > 50 ? props.content.slice(0,50) + ' [...]' : props.content);

    return(
        <section className="another-detail p-2 row mx-1 mx-lg-0" onClick={handleNav}>
            <div className="col-4 h-100 m-0" style={{backgroundImage:`url(${props.image})`,aspectRatio:'1/1',borderRadius:'6px',backgroundSize:'cover',backgroundPosition:'center'}} />
            <section className="col-8 m-0 d-flex justify-content-start flex-column">
                <h6 className="m-0">{props.title}</h6>
                <span>{capt}</span>
            </section>
        </section>
    );
}

export default SmallDetail;