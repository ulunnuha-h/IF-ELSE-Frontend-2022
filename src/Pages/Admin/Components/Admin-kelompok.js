import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { getAllMahasiswa } from "../../../Data/Mahasiswa";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import TambahKelompok from "./Admin-kelompok/Admin-kelompok-tambah";
import { getAllKelompok,getKelompokNameById } from "../../../Data/Kelompok";

const AdminKelompok = () => {
    const nav = useNavigate();
    const [key,setKey] = useState('');
    const [DataMahasiswa,setDataMahasiswa] = useState({}); 
    const DataKelompok = getAllKelompok();
    const [pageCount,setPageCount] = useState(1);
    const [tambah,setTambah] = useState(false);
    const [pageNum,setPageNum] = useState(0);
    const pageHandler = ({selected}) => {
        setPageNum(selected);
    }

    useEffect(()=>{
        setPageNum(0);
        setDataMahasiswa({data:{result:[]},success:false});
        getAllMahasiswa(key).then(res => setDataMahasiswa(res));
        // setDataMahasiswa(getAllMahasiswa(key));
    },[key]);

    useEffect(()=>{
        if(DataMahasiswa.success)setPageCount(Math.ceil(DataMahasiswa.data.result.length/10));
    },[DataMahasiswa])

    return(
        <>
        <TambahKelompok tambah={tambah} setTambah={setTambah}/>
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light">
            <section className="d-flex justify-content-between mb-3">
                <h3>List Kelompok</h3>
                <button className="btn btn-primary" onClick={()=>setTambah(true)}>Tambah Kelompok</button>
            </section>
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>  
                    <th className="col-1">ID</th>
                    <th>Nama Kelompok</th>
                    <th>Pendamping</th>
                    <th className="col-1">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {DataKelompok.map((data,idx)=>
                        <tr key={idx}>
                            <td className="py-3">{data.id}</td>
                            <td className="py-3">{data.kelompok}</td>
                            <td className="py-3">{data.pendamping}</td>
                            <td><button className="btn btn-primary w-100" onClick={()=>nav(`${data.id}`)}>Detail</button></td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light">  
            <h3>List Data Mahasiswa</h3>
            <section className="mb-3 d-flex align-items-center">
                <input className="w-100" placeholder="Cari berdasarkan nim atau nama..." value={key} onChange={e=>setKey(e.target.value)}></input>
                <i className="fa-solid fa-magnifying-glass mx-2"></i>
            </section>           
            {DataMahasiswa.success ?
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
                        {DataMahasiswa.data.result.slice(pageNum*10,(pageNum*10)+10).map((data,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td className="py-3 col-1">{data.nim}</td>
                                    <td className="py-3">{data.nama}</td>
                                    <td className="py-3">{getKelompokNameById(data.group_id)}</td>
                                    <td className="col-1"><button className="btn btn-primary w-100" onClick={()=>nav(`mahasiswa/${data.user_id}`)}>Detail</button></td>
                                </tr>
                            );
                        })}
                    </tbody>
            </Table>
            :
            <div className="w-100 p-3 d-flex justify-content-center">
                <div className="spinner-border" role="status"/>
            </div>
            }
            <ReactPaginate 
                pageCount={pageCount}
                containerClassName="pagination"
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