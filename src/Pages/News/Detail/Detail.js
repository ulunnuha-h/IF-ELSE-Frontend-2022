import React from "react";
import SideSosial from "./SideSosial";
import './Detail.css'
import { motion } from "framer-motion";
import Bg from '../../../Assets/background.svg'
import { getBeritaById , getBeritaTerbaru} from "../../../Data/Berita";
import { Link, useParams } from "react-router-dom";
import SmallDetail from "./SmallDetail";

function Detail() {
    const idBerita = parseInt(useParams().id);
    const data = getBeritaById(idBerita);
    const beritaTerbaru = getBeritaTerbaru();

    return(
        <main style={{backgroundColor:'#ba4b00',zIndex:'-1',backgroundImage:`url(${Bg})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
            <SideSosial/>
            <div className="container-lg row m-auto py-3">
                    <nav style={{zIndex:'0'}}>
                        <ol className="breadcrumb" >
                            <li className="breadcrumb-item"><Link className="breadcrumb-link" to='/home'>Home</Link></li>
                            <li className="breadcrumb-item"><Link className="breadcrumb-link" to='/news'>News</Link></li>
                        </ol>
                    </nav>
                <motion.div 
                    initial={{opacity:0,y:300}}
                    animate={{opacity:1,y:0}}
                    transition={{type:'tween',ease:'circOut'}}
                    className="template-detail col-lg-8 col-12 p-4">
                    <section className="my-3 p-0">
                        <h1 className="judul-detail">{data.title}</h1>
                    </section>
                    <span className="tanggal-detail">{data.published_at}</span>
                    <div style={{backgroundImage:`url(${data.image})`,aspectRatio:'16/9',backgroundSize:'cover'}} alt="" className="bg-dark image-detail my-3"/>
                    <pre className="isi-detail">
                        {data.content}
                    </pre>
                    <hr></hr>
                    <h4 className="text-light">Recent News</h4>
                    <div className="row row-cols-1 row-cols-lg-2">
                        {beritaTerbaru.map(berita => <SmallDetail {...berita}/>)}
                    </div>
                </motion.div>
                <div className="col-4 px-4 mt-3 d-none d-lg-block">
                    <h4 style={{color:'var(--color-font)'}}>Recent News</h4>
                    {beritaTerbaru.map(berita => <SmallDetail {...berita}/>)}
                </div>
            </div>
        </main>
    );
}

export default Detail;