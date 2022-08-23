import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Table } from "react-bootstrap";
import { getKelompokById,deleteKelompok } from "../../../../Data/Kelompok";
import EditKelompok from "./Admin-kelompok-edit";
import KelompokDeleteWarning from "./Admin-kelompok-deleteWarning";

const KelompokDetail = () => {
    const kelompokId = useParams().kelompokId;
    const [data,setData] = useState([]);
    const [edit,setEdit] = useState(false);
    const [warn,setWarn] = useState(false);
    const nav = useNavigate();
    const [mahasiswaData,setMahasiswaData] = useState([]);

    useEffect(()=>{
        getKelompokById(kelompokId)
        .then(res =>
            {
                setData(res.data);
                if(res.data.Student !== null) setMahasiswaData(res.data.Student);
            });
    },[kelompokId])
    
    if(!data) return <h1>No data</h1>;

    const deleteHandler = () => {
        if(mahasiswaData.length === 0) {
            deleteKelompok(kelompokId)
            .then(() => {
                alert("Kelompok berhasil dihapus")
                nav(-1);
            });
        }
        else setWarn(true);
    }


    const showAllMahasiswa = (mahasiswaData !== [] ? mahasiswaData.map((dataMhs,idx) => {
            return(
                <tr key={idx}>
                    <td className="py-3 col-1">{dataMhs.nim}</td>
                    <td className="py-3 text-start">{dataMhs.name}</td>
                    <td className="py-3">{dataMhs.group_name}</td>
                    <td className="col-2 text-center">
                        <button className="btn btn-info" onClick={()=>nav(`../kelompok/mahasiswa/${dataMhs.id}`)}>
                            <i className="fa-solid fa-circle-info"></i> Detail
                        </button>
                    </td>
                </tr>
            );
        }) : null
    );

    return(
        <>
            <i 
                className="fa-solid fa-arrow-left ms-4 mt-4 text-dark" 
                onClick={()=>nav(-1)}
                style={{"cursor":"pointer"}}
                ></i>
            <EditKelompok edit={edit} setEdit={setEdit} id={kelompokId}/>
            <KelompokDeleteWarning warn={warn} setWarn={setWarn}/>
            <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
                <div className="d-flex justify-content-between align-items-start">
                    <section>
                        <h3 className="m-0">Kelompok {data.group_name}</h3>
                        <span>Link group  <a href={`//${data.line_group}`} target="blank">{data.line_group}</a></span>
                    </section>
                    <section className="d-flex flex-column-reverse flex-lg-row">
                        <button className="btn btn-danger m-1" onClick={()=>deleteHandler()}><i className="fa-solid fa-trash"></i> Delete</button>
                        <button className="btn btn-secondary m-1" onClick={()=>setEdit(true)}><i className="fa-solid fa-pen-to-square"/> Edit</button>
                    </section>
                </div>
                <hr></hr>
                <div className="row px-3 justify-content-between">
                    <div className="col-3 rounded h-100" style={{aspectRatio:"1/1",backgroundImage:`url(${data.link_foto})`,backgroundSize:"cover"}}/>
                    <section className="col-8 col-lg-9">
                        <h5>Pendamping</h5>
                        <section className="row my-2">
                            <span className="col-lg-2 col-12">Nama</span>
                            <span className="col-lg-auto col-12 bg-secondary rounded">{data.companion_name}</span>
                        </section>
                        <section className="row my-2">
                            <span className="col-lg-2 col-12">Line</span>
                            <span className="col-lg-auto col-12 bg-secondary rounded">{data.id_line}</span>
                        </section>
                    </section>
                </div>
            </div>
            <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
            {mahasiswaData !== null ?
            <>
                <h3>Data Mahasiswa</h3>
                <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>  
                        <th>NIM</th>
                        <th className="text-start">Nama</th>
                        <th>Kelompok</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {showAllMahasiswa}
                </tbody>
                </Table>
            </> :
            <div className="w-100 p-3 d-flex justify-content-center">
                    <div className="spinner-border" role="status"/>
            </div>
            }
            </div>
        </>
    );
}

export default KelompokDetail;