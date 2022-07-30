import React from "react";
import { useNavigate } from "react-router-dom";

const NewsSmall = () => {
    const nav = useNavigate();
    const toDetail = () => {
        nav('1');
        window.scroll(0,0);
    };

    return(
        <section className='px-2 pb-3' style={{aspectRatio:'1/1'}} onClick={toDetail}>
            <div className='w-100 h-100 news-search'style={{borderRadius:'6px',overflow:'hidden'}}>
                <section className="news-search-img h-100 d-flex align-items-end" style={{backgroundImage:'url(https://placekitten.com/300/400)'}}>
                    <section className="new-search-capt p-3">
                        <h4 className="m-0">SELAMAT HARI RAYA IDUL ADHA 1443 H</h4>
                        <section className="news-search-p">
                            <p className="m-0 mb-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at ullamcorper est.
                            </p>
                        </section>
                        <span>15 Agustus 2001</span>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default NewsSmall