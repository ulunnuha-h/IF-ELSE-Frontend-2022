import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toLocalDate } from "../../../Config/Converter";

const NewsRecent = (props) => {
    const nav = useNavigate();
    const detailHandle = () => nav(`/news/${props.id}`);
    const croppedCapt = ( props.content.length > 380 ? props.content.slice(0,380) + '[...]' : props.content);
    const isMobile = (window.innerWidth < 576);

    const bgColor = {backgroundColor : 'rgba(115, 38, 72, 0.8)'} 

    return(
        <motion.div 
            whileHover={{scale:0.98,filter:'brightness(0.9)'}}
            transition={{type:'tween',ease:'circOut'}}
            onClick={detailHandle} 
            style={{cursor:'pointer'}}>
            <section className='slide-recent row m-0' style={{borderRadius:'12px',...bgColor}}>
                <div className='col-12 col-lg-8 p-lg-3 p-1'>
                    <section className='bg-dark w-100 h-100' style={{backgroundImage:`url(${props.image})`,backgroundSize:'cover',borderRadius:'6px',overflow:'hidden',backgroundPosition:'center'}}>
                        <section className="w-100 h-100 d-flex align-items-end text-white p-lg-4 p-2" style={{background:'linear-gradient(transparent 60%, black 100%)',opacity:'0.8'}}>
                            <span className={isMobile ? 'h6' : 'h2'}>{props.title}</span>
                        </section>
                    </section>
                </div>
                <div className='col-4 p-4 ps-0 d-none d-lg-block'>
                    <section className='w-100 h-100 text-white d-flex flex-column justify-content-between' style={{boxSizing:'border-box'}}>
                        <section>
                            <h4 className="m-0 mb-2">{props.title}</h4>
                            <pre style={{backgroundColor:'transparent'}}>
                                {croppedCapt}
                            </pre>
                        </section>                            
                        <section className="d-flex justify-content-between">
                            <span>{toLocalDate(props.updated_at)}</span>
                        </section>
                    </section>
                </div>
            </section>
        </motion.div>
    )
}

export default NewsRecent;