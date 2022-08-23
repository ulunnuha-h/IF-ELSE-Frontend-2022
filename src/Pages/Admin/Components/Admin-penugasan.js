import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/esm/Table";
import { getAdminAllTask } from "../../../Data/Task";
import TambahTugasModal from "./Admin-penugasan/Admin-penugasan-tambah";
import EditTugas from "./Admin-penugasan/Admin-penugasan-edit";
import { toLocalDate } from "../../../Config/Converter";
import LoadingSpinner from "../../../Components/Loading/LoadingSpinner";

const AdminPenugasan = () => {
    const [tugas,setTugas] = useState([]);
    const [tambah,setTambah] = useState(false);
    const handleTambah = () => setTambah(false);
    const [edit,setEdit] = useState(false);
    const handleEdit = () => setEdit(false);
    const [id,setId] = useState();
    const [err,setErr] = useState('');
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
      getAdminAllTask()
      .then(res => {
        if(!res.data) setErr(res.response.data.message);
        else setTugas(res.data);
        setLoading(false);
      });
    }
    ,[edit,tambah])

    const showEdit = (inputId)=>{
      setId(inputId);
      setEdit(true);
    }

    if(err !== "") return(
      <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
        <h1>{err}</h1>
      </div>
      );

    return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light h-100 rounded">
            <TambahTugasModal show={tambah} handleClose={handleTambah}/>
            {edit ? <EditTugas show={edit} handleClose={handleEdit} id={id}/> : null}
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List Penugasan</h3>
                <button className="btn btn-primary" onClick={()=>setTambah(true)}>
                  <i className="fa-solid fa-plus me-1"/>Tambah
                </button>
            </div>
            {loading ?
            <LoadingSpinner/>:
            <Table striped bordered hover responsive variant="dark" className="text-center">
                  <thead>
                    <tr>  
                      <th>ID</th>
                      <th className="text-start">Judul</th>
                      <th>Batas Akhir</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tugas.map((tugas,idx)=>
                    <tr key={idx}>
                      <td className="col-1">{tugas.id}</td>
                      <td className="text-start">{tugas.title}</td>
                      <td className="col-3">{toLocalDate(tugas.deadline)}</td>
                      <td className="col-2">
                        <Button onClick={()=>showEdit(tugas.id)} variant="secondary">
                          <i className="fa-solid fa-pen-to-square me-2"/>Edit
                        </Button>
                      </td>
                    </tr>
                    )}
                  </tbody>
            </Table>
            }
        </div>
    );
}

export default AdminPenugasan;