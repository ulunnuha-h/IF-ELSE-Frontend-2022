import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";
import { getAdminAllBerita } from "../../../Data/Berita";
import LoadingSpinner from "../../../Components/Loading/LoadingSpinner";

const AdminBerita = () => {
  const nav = useNavigate();
  const [berita, setBerita] = useState([]);
  const [loading,setLoading] = useState(true);
  const [err,setErr] = useState('');

  useEffect(() => {
    setLoading(true);
    getAdminAllBerita()
    .then(resp => {
      if(resp?.success){
        if(resp?.data !== null) setBerita(resp?.data);
      }else{
        setErr(resp.response.data.message);
      }
      setLoading(false);
    });
  }, [])

    if(err !== "") return(
      <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
        <h1>{err}</h1>
      </div>
      );

    return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded" style={{minHeight:'100vh'}}>
            <div className="d-flex justify-content-between mb-3">
                <h3 className="m-0">List Berita</h3>
                <button className="btn btn-primary" onClick={()=>nav('baru')}>
                  <i className="fa-solid fa-plus me-1"/>Tambah
                </button>
            </div>
            {loading ? 
            <LoadingSpinner/> :
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
                    {berita !== null ? berita.map((berita,index)=>
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td className="col-8 text-start">{berita.title}</td>
                        <td>{berita.status ? 'Published ✔️' : 'Archieved ❌'}</td>
                        <td>
                          <Button onClick={()=>nav(`edit/${berita.id}`)} variant="secondary">
                            <i className="fa-solid fa-pen-to-square me-2"/>Edit
                          </Button></td>
                      </tr>
                    ) : 
                    <tr>
                        <td>No Data</td>
                        <td>No Data</td>
                        <td>No Data</td>
                        <td>No Data</td>
                      </tr>}
                  </tbody>
            </Table>}
        </div>
    );
}

export default AdminBerita;