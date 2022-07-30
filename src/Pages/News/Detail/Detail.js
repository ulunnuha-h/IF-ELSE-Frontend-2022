import React from "react";
import SideSosial from "./SideSosial";
import './Detail.css'
import { motion } from "framer-motion";
import Bg from '../../../Assets/background.svg'

function Detail() {
    return(
        <main style={{backgroundColor:'#ba4b00',zIndex:'-1',backgroundImage:`url(${Bg})`,backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
            <SideSosial/>
            <div className="container-lg row m-auto py-3">
                <motion.div 
                    initial={{opacity:0,y:300}}
                    animate={{opacity:1,y:0}}
                    transition={{type:'tween',ease:'circOut'}}
                    className="template-detail col-lg-8 col-12 p-4">
                    <section className="judul-detail m-0 p-0">
                        Judul Berita
                    </section>
                    <span className="tanggal-detail">12 September 2015</span>
                    <img src="https://placekitten.com/2104/1272" alt="" className="image-detail my-3"></img>
                    <pre className="isi-detail">
                        {capt}
                    </pre>
                    <hr></hr>
                    <h4 className="text-light">Another News</h4>
                    <div className="row row-cols-1 row-cols-lg-2">
                        <div>
                            <section className="another-detail p-2 row mx-1 mx-lg-0">
                                <div className="img-fluid col-4 h-100" style={{backgroundImage:`url(https://placekitten.com/640/360)`,aspectRatio:'1/1',borderRadius:'6px',backgroundSize:'cover',backgroundPosition:'center'}} />
                                <section className="col-8 m-0 d-flex justify-content-center flex-column">
                                    <h6>Judul Berita</h6>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at ullamcorper est.</span>
                                </section>
                            </section>
                        </div>
                        <div>
                            <section className="another-detail p-2 row mx-1 mx-lg-0">
                                <div className="img-fluid col-4 h-100" style={{backgroundImage:`url(https://placekitten.com/640/360)`,aspectRatio:'1/1',borderRadius:'6px',backgroundSize:'cover',backgroundPosition:'center'}} />
                                <section className="col-8 m-0 d-flex justify-content-center flex-column">
                                    <h6>Judul Berita</h6>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at ullamcorper est.</span>
                                </section>
                            </section>
                        </div>
                    </div>
                </motion.div>
                <div className="col-lg-4 col-12 px-lg-4 px-0 mt-3 mt-lg-0">
                    <h4 style={{color:'var(--color-font)'}}>Another News</h4>
                    <section className="another-detail p-2 row mx-1 mx-lg-0">
                        <div className="img-fluid col-4 h-100" style={{backgroundImage:`url(https://placekitten.com/640/360)`,aspectRatio:'1/1',borderRadius:'6px',backgroundSize:'cover',backgroundPosition:'center'}} />
                        <section className="col-8 m-0 d-flex justify-content-center flex-column">
                            <h6>Judul Berita</h6>
                            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at ullamcorper est.</span>
                        </section>
                    </section>
                </div>
            </div>
        </main>
    );
}

export default Detail;

const capt = `[SELAMAT HARI RAYA IDUL ADHA 1443 H]

Takbir berkumandang, pertanda hari kemenangan telah datang.

Halo Informatics 👋🏻!

Kami segenap keluarga besar IF ELSE 2022 mengucapkan Selamat Hari Raya Idul Adha 1443 H.
Semangat berkurban untuk kita semua. Semoga Idul Adha tahun ini Allah SWT memberikan banyak keberkahan dan menjadi pengingat untuk memperkuat keimanan dan kemanusiaan kita. Selamat Hari Raya Idul Adha 🙏.

Pantau terus linimasa kami!
LINE : @ifelsefilkomub
INSTAGRAM : @ifelsefilkomub
YOUTUBE : ifelse.filkom.ub.ac.id/youtube
WEB : ifelse.filkom.ub.ac.id

==========================================
Departemen Pengembangan Sumber Daya Manusia
Eksekutif Mahasiswa Informatika UB 2022
Kabinet Bratacahya
#MakeANewStoryWithYourNewFamily
#ifelse2022
#BersatuDalamCahaya
#SatuPaduInformatika`