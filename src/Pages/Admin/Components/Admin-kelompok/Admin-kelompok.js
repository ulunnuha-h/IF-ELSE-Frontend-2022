import React, { useState } from "react";
import Table from "react-bootstrap/esm/Table";
import getAllMahasiswa from "../../Data/Mahasiswa";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";

const AdminKelompok = () => {
    const nav = useNavigate();

    const DataMahasiswa = getAllMahasiswa();
    const pageCount = Math.ceil(DataMahasiswa.length/10);
    const [pageNum,setPageNum] = useState(0);
    const pageHandler = ({selected}) => {
        setPageNum(selected);
    }

    const showListMahasiswa = DataMahasiswa.slice(pageNum*10,(pageNum*10)+10).map((data)=>{
        return(
            <tr>
                <td className="py-3">{data.nim}</td>
                <td className="py-3">{data.nama}</td>
                <td className="py-3">{data.kelompok}</td>
                <td><button className="btn btn-primary w-100">Detail</button></td>
            </tr>
        );
    });

    return(
      <>
        <div className="m-4 p-4 bg-dark text-light">
            <h3>List Kelompok</h3>
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
                      <td className="py-3">1</td>
                      <td className="py-3">Mark</td>
                      <td className="py-3">Otto</td>
                      <td><button className="btn btn-primary w-100" onClick={()=>nav('123')}>Detail</button></td>
                    </tr>
                  </tbody>
            </Table>
          </div>
          <div className="m-4 p-4 bg-dark text-light">  
            <h3>List Semua Maba imut</h3>
            <Table striped bordered hover responsive variant="dark">
                  <thead>
                    <tr>
                      <th>NIM</th>
                      <th>Nama</th>
                      <th>Kelompok</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {showListMahasiswa}
                  </tbody>
            </Table>
            <ReactPaginate 
                pageCount={pageCount}
                containerClassName="pagination dark"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                activeClassName="page-item active"
                onPageChange={pageHandler}
                />
        </div>
      </>
    );
}

export default AdminKelompok;