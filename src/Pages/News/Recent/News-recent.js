import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NewsRecent = (props) => {
    const nav = useNavigate();
    const detailHandle = () => nav(`${props.id}`);
    const croppedCapt = props.content.slice(0,218) + '[...]';
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
                    <section className='bg-dark w-100 h-100' style={{backgroundImage:`url(${props.image})`,backgroundSize:'cover',borderRadius:'6px',overflow:'hidden'}}>
                        <section className="w-100 h-100 d-flex align-items-end text-white p-lg-4 p-2" style={{background:'linear-gradient(transparent 60%, black 100%)',opacity:'0.8'}}>
                            <span className={isMobile ? 'h6' : 'h2'}>{props.title}</span>
                        </section>
                    </section>
                </div>
                <div className='col-4 p-4 ps-0 d-none d-lg-block'>
                    <section className='w-100 h-100 text-white d-flex flex-column justify-content-between' style={{boxSizing:'border-box'}}>
                        <section>
                            <h4 className="m-0">{props.title}</h4>
                            <pre style={{backgroundColor:'transparent'}}>
                                {croppedCapt}
                            </pre>
                        </section>                            
                        <section className="d-flex justify-content-between">
                            <span>{props.published_at}</span>
                        </section>
                    </section>
                </div>
            </section>
        </motion.div>
    )
}

export default NewsRecent;

let caption = `Takbir berkumandang, pertanda hari kemenangan telah datang.

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
#SatuPaduInformatika`;