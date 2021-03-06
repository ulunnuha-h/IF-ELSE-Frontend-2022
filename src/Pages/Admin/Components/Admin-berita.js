import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";
import { getAllBerita } from "../../../Data/Berita";

const AdminBerita = () => {
  const nav = useNavigate();
  const berita = getAllBerita();

    return(
        <div className="m-4 p-4 bg-dark text-light">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List Berita</h3>
                <button className="btn btn-primary" onClick={()=>nav('baru')}>Tambah berita</button>
            </div>
            
            <Table striped bordered hover responsive variant="dark">
                  <thead>
                    <tr>  
                      <th>No</th>
                      <th>judul</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {berita.map((berita,index)=>
                      <tr>
                        <td className="col-1">{berita.id}</td>
                        <td>{berita.judul}</td>
                        <td className="col-2"><Button className="w-100" onClick={()=>nav(`edit/${berita.id}`)}>Edit</Button></td>
                      </tr>
                    )}
                  </tbody>
            </Table>
        </div>
    );
}

export default AdminBerita;