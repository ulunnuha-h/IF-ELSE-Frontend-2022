import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";
import { getAllBerita } from "../../../Data/Berita";

const AdminBerita = () => {
  const nav = useNavigate();
  const berita = getAllBerita();

    return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded" style={{minHeight:'100vh'}}>
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List Berita</h3>
                <button className="btn btn-primary" onClick={()=>nav('baru')}>
                  <i className="fa-solid fa-plus me-1"/>Tambah
                </button>
            </div>
            
            <Table striped bordered hover responsive variant="dark" className="text-center">
                  <thead>
                    <tr>  
                      <th>No</th>
                      <th className="text-start">Judul</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {berita.map((berita,index)=>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="col-8 text-start">{berita.title}</td>
                        <td>{berita.is_published ? 'Published ✔️' : 'Archieved ❌'}</td>
                        <td>
                          <Button onClick={()=>nav(`edit/${berita.id}`)} variant="secondary">
                            <i className="fa-solid fa-pen-to-square me-2"/>Edit
                          </Button></td>
                      </tr>
                    )}
                  </tbody>
            </Table>
        </div>
    );
}

export default AdminBerita;