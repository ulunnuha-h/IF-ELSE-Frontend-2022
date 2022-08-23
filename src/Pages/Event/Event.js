import React, { useEffect, useState } from "react";
import './Event.css';
import Bg from '../../Assets/background.svg'
import {ReactComponent as SubmitBtn} from '../../Assets/submit-btn.svg'
import { motion } from "framer-motion";
import { getAllAgenda } from "../../Data/Agenda";
import { postPerizinan } from "../../Data/Perizinan";

const titleMotion = {
    initial : {
        opacity : 0,
        y:20
    },
    animate : {
        opacity : 1,
        y:0
    },
    transition : {
        duration : 0.3,
        type : 'tween',
        ease : 'circOut'
    }
}

const Event = () => {
    const [agendaData,setAgendaData] = useState([]);
    const [agenda,setAgenda] = useState(0);
    const [data,setData] = useState({});
    const [link,setLink] = useState('');

    useEffect(()=>{
        getAllAgenda()
        .then(res => 
            {
                setAgendaData(res?.data);
                setData(res?.data[0])
            });
    },[])

    const agendaHandler = (idx) => {
        setAgenda(idx);
        setData(agendaData[idx]);
    }

    const nextHandler = () => {
        if(agenda < agendaData.length - 1) agendaHandler(agenda+1);
    }

    const prevHandler = () => {
        if(agenda > 0) agendaHandler(agenda-1);
    }

    const perizinanHandler = e => {
        e.preventDefault();
        postPerizinan(data.id,link)
        .then(() => {
            alert("Perizinan telah terkirim");
            window.location.reload();
        });
    }

    return(
        <main className="event-container py-3" style={{backgroundImage:`url(${Bg})`}}>
            <motion.div {...titleMotion} className="container-lg">
                <section className="text-center mb-4 event-title d-flex justify-content-center align-items-center">
                    <i className="fa-solid fa-circle-arrow-left event-switch" onClick={prevHandler}/>
                    <div style={{width:'400px'}}>
                        <h1 className="m-0">RANGKAIAN {agenda + 1}</h1>
                        <h3 className="m-0">"{data.title}"</h3>
                        <span>{data.start_at} - {data.end_at}</span>
                    </div>
                    <i className="fa-solid fa-circle-arrow-right event-switch" onClick={nextHandler}/>
                </section>
                <hr></hr>
                <section className="row flex-column-reverse d-flex flex-lg-row">
                    {data.is_published ? 
                    <div className="col-12 col-lg-9 row p-0 m-auto">
                        <div className="p-0">
                            <div className="d-flex flex-column align-items-center p-lg-4 py-3 event-box mx-2">
                                <h2 className="text-white">PERIZINAN</h2>
                                <Ketentuan/>
                                <Alur/>
                                <Narahubung/>
                                <div className="mt-5 text-white mx-4">
                                    <h5 className="text-white m-0">UPLOAD SURAT PERIZINAN</h5>
                                </div>
                                { localStorage.getItem('token') !== null ?
                                <form className="d-flex align-items-center justify-content-center my-4 w-75" onSubmit={perizinanHandler}>
                                    <input className="event-input w-100 me-3 p-2" name="perizinan" type="text" placeholder=" Masukkan link" value={link} onChange={e=>setLink(e.target.value)}/>
                                    <button type="submit" className="px-4 py-2">
                                        <SubmitBtn className="m-0 p-0 w-100"/>
                                    </button>
                                </form> : 
                                <div className="row p-2 m-2">
                                    <div className="alert alert-warning w-100 m-auto">
                                        <i className="fa-solid fa-triangle-exclamation me-2"></i>
                                        Silakan login terlebih dahulu sebelum melakukan submit surat perizinan
                                    </div>
                                </div>
                                }
                                <section className="row p-2 m-auto">
                                    <i className="fa-solid fa-hashtag col-2 event-hastag p-0"/>
                                    <section className="col-10 p-0 text-white text-justify">
                                        Perizinan diisi ketika tidak bisa mengikuti rangkaian acara (diisi sebelum rangkaian acara)
                                    </section>
                                </section>
                            </div>
                        </div>
                    </div> : 
                    <div className="col-12 col-lg-9 row p-0 m-0">
                        <div className="alert alert-warning w-75 m-auto mt-5">
                            <i className="fa-solid fa-triangle-exclamation me-2"></i>
                            Perizinan belum dibuka
                        </div>
                    </div>
                    }
                    <div className="col-12 col-lg-3 d-flex flex-container flex-column align-items-center py-3">
                        <h5 className="mt-1">Download</h5>
                        <button className="btn-toggle w-auto py-2 px-4 my-2">
                            <a href={linkSuratPerizinan} target="blank" className="text-white" style={{textDecoration:'none'}}>Surat Perizinan <i className="fa-solid fa-circle-down"/></a>
                        </button>
                        <button className="btn-toggle w-auto py-2 px-4 my-2">
                            Buku Panduan <i className="fa-solid fa-circle-down"/>
                        </button>
                    </div>
                </section>
            </motion.div>
        </main>
    );
}

export default Event;

const linkSuratPerizinan = 'https://docs.google.com/document/d/1d8FIuLX-ilJKAn4O9lJVBS5Xrvm2rzAt/edit?rtpof=true&sd=true';

const Ketentuan = () => {
    return(
        <div className="align-self-start mt-5 text-white mx-4">
            <h5 className="text-white">KETENTUAN PERIZINAN <hr></hr></h5>
            <p>Berikut adalah ketentuan izin tidak mengikuti kegiatan Informatics Education and Learning for Society Enhancement 2022 bagi mahasiswa Teknik Informatika 2022.</p>
            <p>Alasan izin yang di perkenankan, diantaranya :</p>
            <ul className="mb-0">
                <li>Sakit (melampirkan surat sakit resmi dari dokter).</li>
                <li>Tugas Kampus dari Universitas/Fakultas/Jurusan/Prodi (melampirkan surat tugas).</li>
                <li>Mengikuti Perlombaan (melampirkan bukti konkrit yaitu surat keterangan ikut lomba dan surat izin dengan format yang telah ditentukan)</li>
                <li>Alasan mendesak seperti keluarga meninggal melampirkan bukti konkrit yaitu surat keterangan dengan tanda tangan orang tua dan surat kematian, jika keluarga sakit melampirkan bukti konkrit yaitu surat keterangan dengan tanda tangan orang tua dan surat keterangan sakit.</li>
                <li>Acara keluarga yang mendesak dengan melampirkan bukti konkrit (surat keterangan dari orang tua dengan tanda tangan orang tua, foto diri saat acara dan surat izin dengan format yang telah ditentukan).</li>
                <li>Acara keagamaan dengan melampirkan bukti konkrit (surat keterangan dari orang tua dengan tanda tangan orang tua, foto diri saat acara dan surat izin dengan format yang telah ditentukan).</li>
                <li>Bencana alam dengan melampirkan bukti konkrit (jika ada dan tidak terkendala).</li>
            </ul>
        </div>
    );
}

const Alur = () => {
    return(
        <div className="align-self-start mt-5 text-white mx-4">
            <h5 className="text-white">ALUR PERIZINAN <hr></hr></h5>
            <p>Diperuntukkan untuk Mahasiswa Teknik Informatika 2022 untuk melakukan Perizinan. Untuk prosedurnya sebagai berikut.</p>
            <ol className="mb-0">
                <li>Mahasiswa Teknik Informatika 2022 melakukan login pada website IF ELSE 2022.</li>
                <li>Mahasiswa Teknik Informatika 2022 menekan ikon Event pada bagian kanan atas halaman utama.</li>
                <li>Mahasiswa Teknik Informatika 2022 membaca Ketentuan Perizinan Program Pembinaan Mahasiswa Baru Teknik Informatika 2022.</li>
                <li>Mahasiswa Teknik Informatika 2022 mengunduh Surat Izin IF ELSE 2022 pada drive yang telah disediakan.</li>
                <li>Mahasiswa Teknik Informatika 2022 memilih rangkaian IF-ELSE 2022.</li>
                <li>Mahasiswa Teknik Informatika 2022 menekan bagian perizinan.</li>
                <li>Mahasiswa Teknik Informatika 2022 mengisi dan mengunggah Surat Izin IF ELSE 2022 disertai bukti pendukung yang dilampirkan pada  surat izin.</li>
                <li>Mahasiswa Teknik Informatika 2022 menyerahkan Surat Izin IF ELSE 2022 secara offline dengan menyertakan bukti pendukung perizinan kepada Crisis Center IF-ELSE 2022</li>
                <li>Perizinan secara online dibuka mulai H-1 sampai dengan H+3 rangkaian</li>
            </ol>
        </div>
    );
}

const Narahubung = () => {
    return(
        <div className="align-self-start mt-5 text-white mx-4">
            <h5 className="text-white w-100">NARAHUBUNG CRISIS CENTER IF ELSE 2022<hr></hr></h5>
            <ul>
                <li>Agil Winaldi Firman	 	(Line/WhatsApp: agilwinaldi/ 081263907890)</li>
                <li>Nabila Nur Fajri Adhia	(Line/WhatsApp: fjnbilaa / 081249313281)</li>
            </ul>
        </div>
    );
}