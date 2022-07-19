import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MahasiswaDetail = () => {
    const nav = useNavigate('');

    return(
        <>
            <i 
                className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" 
                onClick={()=>nav("../kelompok")}
                style={{"cursor":"pointer"}}
                ></i>
            <div className="p-4 m-4 bg-dark text-light row d-flex flex-lg-row flex-column-reverse">        
                <div className="col-lg-9 col-12">
                    <h3>Profil mahasiswa</h3>
                    <section className="d-flex flex-column">
                        <section className="row my-2">
                            <span className="col-lg-3 col-12">Nama</span>
                            <span className="col-lg-9 col-12 bg-secondary rounded">Hanif Ulunnuha Hidayat</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Nama Panggilan</span>
                            <span className="col-lg-9 col-12 bg-secondary  rounded">Hanif</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">NIM</span>
                            <span className="col-lg-9 col-12 bg-secondary  rounded">215150200111019</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Alamat</span>
                            <span className="col-lg-9 col-12 bg-secondary  rounded">Jalan Raya Manding</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Whatsapp</span>
                            <span className="col-lg-9 col-12 bg-secondary  rounded">082215209344</span>
                        </section>
                        <section className="row  my-2">
                            <span className="col-lg-3 col-12">Kelompok</span>
                            <span className="col-lg-9 col-12 bg-secondary  rounded">Debian Edu</span>
                        </section>
                    </section>
                </div>
                <div className="col-lg-3 col-12 p-5 p-lg-4">
                    <div 
                        className="bg-secondary m-auto"
                        style={{"aspectRatio":"1/1","borderRadius":"50%"}}>

                    </div>
                </div>
            </div>
            <div className="m-4 p-4 bg-dark text-light">
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