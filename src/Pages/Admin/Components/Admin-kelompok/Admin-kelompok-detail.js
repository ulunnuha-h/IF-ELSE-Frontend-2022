import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { getKelompokById, getKelompokNameById } from "../../../../Data/Kelompok";
import { getAllMahasiswaByGroup } from "../../../../Data/Mahasiswa";
import EditKelompok from "./Admin-kelompok-edit";

const KelompokDetail = () => {
    const params = useParams();
    const data = getKelompokById(parseInt(params.kelompokId));
    const [edit,setEdit] = useState(false);
    const groupLink = `https://${data.link}`;
    const nav = useNavigate();
    const mahasiswaData = getAllMahasiswaByGroup(data.id);

    const showAllMahasiswa = mahasiswaData.map((dataMhs,idx) => {
            return(
                <tr key={idx}>
                    <td className="py-3 col-1">{dataMhs.nim}</td>
                    <td className="py-3">{dataMhs.name}</td>
                    <td className="py-3">{getKelompokNameById(dataMhs.groupId)}</td>
                    <td className="col-1"><button className="btn btn-primary w-100" onClick={()=>nav(`../kelompok/mahasiswa/${dataMhs.nim}`)}>Detail</button></td>
                </tr>
            );
        });

    console.log(showAllMahasiswa);

    return(
        <>
            <i 
                className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" 
                onClick={()=>nav(-1)}
                style={{"cursor":"pointer"}}
                ></i>
            <EditKelompok edit={edit} setEdit={setEdit} id={parseInt(params.kelompokId)}/>
            <div className="m-4 p-4 bg-dark text-light">
                <div className="d-flex justify-content-between align-items-start">
                    <section className="">
                        <h3 className="m-0">Kelompok {data.kelompok}</h3>
                        <span>Link group  <a href={groupLink} target="blank">{data.link}</a></span>
                    </section>
                    <button className="btn btn-primary px-5" onClick={()=>setEdit(true)}>Edit</button>
                </div>
                <hr></hr>
                <div className="row px-3">
                    <div className="col-lg-3 bg-warning rounded" style={{aspectRatio:"1/1"}}>
                        <img src={data.img}></img>
                    </div>
                    <section className="col-lg-9">
                        <span className="h5">Pendamping</span>
                        <section className="row my-2">
                            <span className="col-lg-2 col-12">Nama</span>
                            <span className="col-lg-auto col-12 bg-secondary rounded">{data.pendamping}</span>
                        </section>
                        <section className="row my-2">
                            <span className="col-lg-2 col-12">Line</span>
                            <span className="col-lg-auto col-12 bg-secondary rounded">{data.line}</span>
                        </section>
                    </section>
                </div>
            </div>
            <div className="m-4 p-4 bg-dark text-light">
                <h3>Data Mahasiswa</h3>
                <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>  
                        <th>NIM</th>
                        <th>Nama Kelompok</th>
                        <th>Kelompok</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {showAllMahasiswa}
                </tbody>
                </Table>
            </div>
        </>
    );
}

export default KelompokDetail;