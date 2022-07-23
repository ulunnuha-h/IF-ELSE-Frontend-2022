import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/esm/Table";
import { getAllTugas } from "../../../Data/Penugasan";
import TambahTugasModal from "./Admin-penugasan/Admin-penugasan-tambah";
import EditTugas from "./Admin-penugasan/Admin-penugasan-edit";

const AdminPenugasan = () => {
    const tugas = getAllTugas();
    const [tambah,setTambah] = useState(false);
    const handleTambah = () => setTambah(false);
    const [edit,setEdit] = useState(false);
    const handleEdit = () => setEdit(false);
    const [id,setId] = useState();

    const showEdit = (inputId)=>{
      setId(inputId);
      setEdit(true);
    }

    return(
        <div className="m-4 p-4 bg-dark text-light h-100">
            <TambahTugasModal show={tambah} handleClose={handleTambah}/>
            {id ? <EditTugas show={edit} handleClose={handleEdit} id={id}></EditTugas> : null}
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List Penugasan</h3>
                <button className="btn btn-primary" onClick={()=>setTambah(true)}>Tambah tugas</button>
            </div>
            <Table striped bordered hover responsive variant="dark">
                  <thead>
                    <tr>  
                      <th>Judul</th>
                      <th>Deskripsi</th>
                      <th>Ketentuan</th>
                      <th>Batas Akhir</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tugas.map((tugas,idx)=>
                    <tr key={idx}>
                      <td>{tugas.judul}</td>
                      <td>{tugas.deskripsi}</td>
                      <td>{tugas.ketentuan}</td>
                      <td>{tugas.deadline.toLocaleDateString()}</td>
                      <td><Button className="w-100" onClick={()=>showEdit(tugas.id)}>Edit</Button></td>
                    </tr>
                    )}
                  </tbody>
            </Table>
        </div>
    );
}

export default AdminPenugasan;