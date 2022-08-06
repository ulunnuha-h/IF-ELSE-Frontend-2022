import React from "react";
import { useNavigate } from "react-router-dom";

const NewsSmall = (props) => {
    const nav = useNavigate();
    const toDetail = () => {
        nav(`${props.id}`);
        window.scroll(0,0);
    };
    const capt = (props.content.length > 100 ? props.content.slice(0,100) + ' [...]' : props.content);

    return(
        <section className='px-2 pb-3' style={{aspectRatio:'1/1'}} onClick={toDetail}>
            <div className='w-100 h-100 news-search'style={{borderRadius:'6px',overflow:'hidden'}}>
                <section className="news-search-img h-100 d-flex align-items-end" style={{backgroundImage:`url(${props.image})`,backgroundSize:'cover'}}>
                    <section className="new-search-capt p-3 w-100">
                        <h4 className="m-0">{props.title.toUpperCase()}</h4>
                        <section className="news-search-p">
                            <p className="m-0 mb-3">
                                {capt}
                            </p>
                        </section>
                        <span>{props.published_at}</span>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default NewsSmall