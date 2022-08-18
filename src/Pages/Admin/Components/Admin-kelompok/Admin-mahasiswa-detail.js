import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getMahasiswaByUserId,updateMahasiswaGroup,deleteMahasiswa } from "../../../../Data/Mahasiswa";
import { getAllKelompok,getKelompokNameById} from "../../../../Data/Kelompok";
import TugasMahasiswa from "./Admin-mahasiswa-tugas";
import NilaiMahasiswa from "./Admin-mahasiswa-nilai";
import { Modal } from "react-bootstrap";

const MahasiswaDetail = () => {
    const userId = parseInt(useParams().id);
    const [data,setData] = useState('');
    const [namaKel, setNamaKel] = useState('');
    const [del,setDel] = useState(false);

    useEffect(()=>{
        // getMahasiswaByUserId(userId).then(res=>{
        //     setData(res.data.data)
        // });
        setData(getMahasiswaByUserId(userId));
    },[userId])

    useEffect(()=>{
        setNamaKel(getKelompokNameById(data.group_id));
    },[data])

    const ubahGroupId = (group_id,user_id) => {
        // setNamaKel(null);
        // updateMahasiswaGroup(group_id,user_id)
        // .then(res =>{
        //     let newGroupId = res.data.data.group_id;
        //     if(newGroupId === null) newGroupId = undefined;
        //     setNamaKel(getKelompokNameById(newGroupId));
        // } );
        const newGroup = getKelompokNameById(updateMahasiswaGroup(group_id,userId));
        setNamaKel(newGroup);
    }

    const allKelompok = getAllKelompok();
    
    const nav = useNavigate();

    if(!data) return(
        <>
            <i className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" onClick={()=>nav(-1)} style={{"cursor":"pointer"}}></i>
            <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light row d-flex flex-lg-row flex-column-reverse">
                <div className="w-100 p-3 d-flex justify-content-center">
                    <div className="spinner-border" role="status"/>
                </div>
            </div>
        </>
        );
    
    else return(
        <>
            <DeleteMahasiswa {...{del,setDel,userId}}/>
            <i className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" onClick={()=>nav(-1)} style={{"cursor":"pointer"}}></i>
            <div className="rounded m-2 p-3 m-md-4 p-md-4 bg-dark text-light row d-flex flex-lg-row flex-column-reverse">        
                <div className="col-lg-9 col-12">
                    <section className="d-flex justify-content-between">
                        <h3>Profil mahasiswa</h3>
                        <button className="btn btn-danger" onClick={()=>setDel(true)}>
                            <i className="fa-solid fa-trash me-2"/>
                            Delete
                        </button>
                    </section>
                    <hr></hr>
                    <section className="d-flex flex-column">
                        <section className="row my-2">
                            <span className="col-lg-3 col-12">Nama</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.nama}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Nama Panggilan</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.nickname}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">NIM</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.nim}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Alamat</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.address}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">ID Line</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.line}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Whatsapp</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.whatsapp}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Kelompok</span>
                            <div className="dropdown col-lg-9 col-12 p-0">
                                <button className="btn btn-secondary dropdown-toggle py-1 w-100 justify-content-between d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {namaKel !== null ? namaKel : 
                                        <span>
                                            Loading
                                            <span class="spinner-border spinner-border-sm ms-1" role="status" aria-hidden="true"/>
                                        </span>
                                    }
                                </button>
                                <ul className="dropdown-menu w-100">
                                    {/* {allKelompok.map((val,idx) => 
                                        <li key={idx} className="dropdown-item" style={{cursor:"pointer"}} onClick={()=>ubahGroupId(val.id,data.user_id)}>{val.kelompok}</li>
                                    )} */}
                                    <li className="dropdown-item" style={{cursor:"pointer"}} onClick={()=>ubahGroupId(null,data.user_id)}>Mengkosong</li>
                                </ul>
                            </div>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">About Me</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.about}</span>
                        </section>
                    </section>
                </div>
                <div className="col-lg-3 col-12 p-5 p-lg-4">
                    <div className="bg-secondary m-auto" style={{"aspectRatio":"1/1","borderRadius":"50%","overflow":"hidden",backgroundImage:`url(${data.avatar})`,backgroundSize:"cover"}}>
                    </div>
                </div>
            </div>
            <TugasMahasiswa userId={userId}/>
            <NilaiMahasiswa userId={userId}/>
        </>
    );
}

export default MahasiswaDetail;

const DeleteMahasiswa = (props) => {
    const handleClose = () => props.setDel(false); 
    const nav = useNavigate();
    const delStudent = () => {
        deleteMahasiswa(props.userId);
        handleClose();
        nav(-1);
    }

    return(
        <Modal show={props.del} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton className="bg-danger text-white" closeVariant="white">
            <Modal.Title>Peringatan !</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Apakah anda yakin akan mengahapus akun ini ? semua data dan kenangan yang tersimpan akan hilang
        </Modal.Body>
        <Modal.Footer>
            <button className="btn">Tidak</button>
            <button className="btn btn-danger" onClick={delStudent}>Yakin</button>
        </Modal.Footer>
        </Modal>
    );
}