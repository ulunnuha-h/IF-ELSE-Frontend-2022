import React, { useEffect, useState } from "react";
import SideSosial from "./SideSosial";
import './Detail.css'
import { motion } from "framer-motion";
import Bg from '../../../Assets/background.svg'
import { getBeritaById , getBeritaTerbaru} from "../../../Data/Berita";
import { Link, useParams } from "react-router-dom";
import SmallDetail from "./SmallDetail";
import { toLocalDate } from "../../../Config/Converter";

function Detail() {
    const idBerita = parseInt(useParams().id);
    const [data,setData] = useState({});
    const [beritaTerbaru,setBeritaTerbaru] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getBeritaById(idBerita).then(res => {
            setData(res.data);
            setLoading(false);
        });
        getBeritaTerbaru().then(res => setBeritaTerbaru(res.data));
    },[idBerita]);

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
                    <section className="my-3 p-0 placeholder-glow">
                        {loading ?
                        <h1 className="placeholder col-12 mb-3 p-0 bg-light"></h1>
                        :<h1 className="judul-detail m-0 p-0">{data.title}</h1>
                        }
                    </section>
                    {loading ?
                    <span className="placeholder-glow"><span className="placeholder col-3 bg-light"/></span>
                    :<span className="tanggal-detail">{toLocalDate(data.updated_at)}</span>
                    }
                    {loading ? 
                    <div className="placeholder-glow"><div className="placeholder col-12 bg-light mt-3" style={{height:'1000px'}}/></div>
                    :<div style={{backgroundImage:`url(${data.image})`,aspectRatio:'16/9',backgroundSize:'cover',backgroundPosition:'center'}} alt="" className="image-detail my-3"/>
                    }
                    <pre className="isi-detail">
                        {data.content}
                    </pre>
                    <hr></hr>
                    <h4 className="text-light">Recent News</h4>
                    <div className="row row-cols-1 row-cols-lg-2">
                        {beritaTerbaru.map((berita,idx) => <SmallDetail key={idx} {...berita}/>)}
                    </div>
                </motion.div>
                <div className="col-4 px-4 mt-3 d-none d-lg-block">
                    <h4 style={{color:'var(--color-font)'}}>Recent News</h4>
                    {beritaTerbaru.map((berita,idx) => <SmallDetail key={idx} {...berita}/>)}
                </div>
            </div>
        </main>
    );
}

export default Detail;