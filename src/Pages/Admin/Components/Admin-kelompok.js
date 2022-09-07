import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";
import { getAllMahasiswa } from "../../../Data/Mahasiswa";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import TambahKelompok from "./Admin-kelompok/Admin-kelompok-tambah";
import { getAllKelompok } from "../../../Data/Kelompok";
import _debounce from "lodash/debounce";
import LoadingSpinner from "../../../Components/Loading/LoadingSpinner";

const AdminKelompok = () => {
    const nav = useNavigate();
    const [key,setKey] = useState('');
    const [DataMahasiswa,setDataMahasiswa] = useState([]); 
    const [DataKelompok,setDataKelompok] = useState([]);
    const [pageCount,setPageCount] = useState(1);
    const [tambah,setTambah] = useState(false);
    const [pageNum,setPageNum] = useState(0);
    const [err,setErr] = useState(null);
    const [loading,setLoading] = useState(true);
    const [groupLoad,setGroupLoad] = useState(true);

    const pageHandler = ({selected}) => {
        setPageNum(selected);
    }

    useEffect(()=>{
        getAllKelompok().then(res => {
            if(!res?.success) setErr(res.message);
            else if(res?.data !== null) setDataKelompok(res.data);
            setGroupLoad(false);
        });
    },[tambah])

    const getMahasiswaData = _debounce(()=>getAllMahasiswa(pageNum,10,key).then(res => {  
        if(res?.data !== null){         
            setPageCount(Math.ceil((res.length - 4)/10));
            setDataMahasiswa(res?.data);
        } else if(res.response?.data.message) setErr(res.response?.data.message);
        setLoading(false);
    }),500);

    useEffect(()=>{
        setLoading(true);
        getMahasiswaData();
    },[pageNum]);

    useEffect(()=>{
        setLoading(true);
        setPageNum(0);
        getMahasiswaData();
    },[key]);

    if(err !== null) return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
            <h1>{err}</h1>
        </div>
    );

    return(
        <>
        <TambahKelompok tambah={tambah} setTambah={setTambah}/>
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
            <section className="d-flex justify-content-between mb-3">
                <h3>List Kelompok</h3>
                <button className="btn btn-primary" onClick={()=>setTambah(true)}>
                    <i className="fa-solid fa-plus me-1"/>Tambah
                </button>
            </section>
            {
            groupLoad ? 
            <LoadingSpinner/>
            :
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>  
                    <th className="col-1">ID</th>
                    <th>Nama Kelompok</th>
                    <th>Pendamping</th>
                    <th className="col-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {DataKelompok.map((data,idx)=>
                        <tr key={idx}>
                            <td className="py-3">{data.id}</td>
                            <td className="py-3">{data.group_name}</td>
                            <td className="py-3">{data.companion_name}</td>
                            <td className="text-center">
                                <button className="btn btn-info" onClick={()=>nav(`${data.id}`)}>
                                    <i className="fa-solid fa-circle-info"></i> Detail
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            }
        </div>
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">  
            <h3>List Data Mahasiswa</h3>
            <section className="mb-3 d-flex align-items-center">
                <input className="w-100" placeholder="Cari berdasarkan nim atau nama..." value={key} onChange={e=>setKey(e.target.value)}></input>
                <i className="fa-solid fa-magnifying-glass mx-2"></i>
            </section>           
            {!loading ?
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
                        {DataMahasiswa.map((data,idx)=>{
                            return(
                                <tr key={idx}>
                                    <td className="py-3 col-1">{data.nim}</td>
                                    <td className="py-3">{data.name}</td>
                                    <td className="py-3">{data.group_name}</td>
                                    <td className="col-2 text-center">
                                        <button className="btn btn-info" onClick={()=>nav(`mahasiswa/${data.id}`)}>
                                            <i className="fa-solid fa-circle-info"></i> Detail
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
            </Table>
            :
            <LoadingSpinner/>
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