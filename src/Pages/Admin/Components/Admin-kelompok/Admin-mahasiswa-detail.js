import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { getMahasiswaByUserId,updateMahasiswaGroup } from "../../../../Data/Mahasiswa";
import { getAllKelompok,getKelompokNameById} from "../../../../Data/Kelompok";

const MahasiswaDetail = () => {
    const params = useParams();
    const data = getMahasiswaByUserId(parseInt(params.id))
    const allKelompok = getAllKelompok();
    const [namaKel, setNamaKel] = useState(getKelompokNameById(data.GroupId));
    const nav = useNavigate('');

    return(
        <>
            <i className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" onClick={()=>nav(-1)} style={{"cursor":"pointer"}}></i>
            <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light row d-flex flex-lg-row flex-column-reverse">        
                <div className="col-lg-9 col-12">
                    <h3>Profil mahasiswa</h3>
                    <hr></hr>
                    <section className="d-flex flex-column">
                        <section className="row my-2">
                            <span className="col-lg-3 col-12">Nama</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.Name}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Nama Panggilan</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.Nickname}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">NIM</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.NIM}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Alamat</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.Address}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Whatsapp</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.Whatsapp}</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Kelompok</span>
                            <div className="dropdown col-lg-9 col-12 p-0">
                                <button className="btn btn-secondary dropdown-toggle py-1 w-100 justify-content-between d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {namaKel}
                                </button>
                                <ul className="dropdown-menu w-100">
                                    {allKelompok.map((kelompok,idx) => <li className="dropdown-item" style={{cursor:"pointer"}} onClick={()=>setNamaKel(updateMahasiswaGroup(kelompok.id,data.nim))} key={idx}>{kelompok.kelompok}</li>)}
                                    <li className="dropdown-item" style={{cursor:"pointer"}} onClick={()=>setNamaKel(updateMahasiswaGroup('',data.NIM))}>Mengkosong</li>
                                </ul>
                            </div>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">About Me</span>
                            <span className="col-lg-9 col-12 bg-secondary py-1 rounded">{data.aboutMe}</span>
                        </section>
                    </section>
                </div>
                <div className="col-lg-3 col-12 p-5 p-lg-4">
                    <div className="bg-secondary m-auto" style={{"aspectRatio":"1/1","borderRadius":"50%","overflow":"hidden"}}>
                        <img src={data.img} className="img-fluid" alt="profilpic"></img>
                    </div>
                </div>
            </div>
            <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light">
                <h3>Tugas Mahasiswa Terkait</h3>
                <hr></hr>
                <Table striped bordered hover responsive variant="dark">
                    <thead>
                        <tr>  
                            <th>ID</th>
                            <th>Nama Kelompok</th>
                            <th>Pendamping</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@lgo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@lgo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@lgo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@lgo</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@lgo</td>
                        </tr>
                    </tbody>
                    </Table>
            </div>
        </>
    );
}

export default MahasiswaDetail;