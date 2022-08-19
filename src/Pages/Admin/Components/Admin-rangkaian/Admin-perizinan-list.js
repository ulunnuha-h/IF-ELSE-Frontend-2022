import React, { useEffect, useState } from "react";
import { Button,Table } from "react-bootstrap";
import { getPerizinanByRangkaian } from "../../../../Data/Perizinan";
import { getAgendaStatus, getAllAgenda, updateAgendaStatus } from "../../../../Data/Agenda";
import { getKelompokNameById } from "../../../../Data/Kelompok";

const cursor = {
    style : { cursor : 'pointer' }
}

const PerizinanList = () => {
    const [status,setStatus] = useState({});
    const [idRangkaian,setIdRangkaian] = useState(1);
    const [agenda,setAgenda] = useState(getAllAgenda());
    const [data,setData] = useState([]);
    const handleStatus = () => setStatus(updateAgendaStatus(idRangkaian));

    const handleRangkaian = id => setIdRangkaian(id);
    const navStyle = (id) => (id === idRangkaian ? "nav-link active" : "nav-link");

    useEffect(()=>{
        setData(getPerizinanByRangkaian(idRangkaian));
        setStatus(getAgendaStatus(idRangkaian));
    },[idRangkaian])

    return(
        <>
            <ul className="nav nav-tabs mb-2">
                {agenda.map((val,idx) => 
                    <li key={idx} className="nav-item">
                        <span {...cursor} className={navStyle(val.id)} onClick={()=>handleRangkaian(val.id)}>{val.title}</span>
                    </li>
                )}
            </ul>
            <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={status} onChange={handleStatus}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{status ? "Dibuka" : "Ditutup"}</label>
                </div>
            </div>
            <Table striped bordered hover responsive variant="dark">
                    <thead>
                    <tr>  
                        <th>Nama</th>
                        <th>NIM</th>
                        <th>Kelompok</th>
                        <th>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((val,idx) => 
                    <tr key={idx}>
                        <td className="col-4">{val.nama}</td>
                        <td className="col-3">{val.nim}</td>
                        <td className="col-3">{getKelompokNameById(val.group_id)}</td>
                        <td className="col-2 text-center">
                            <Button>
                                <i className="fa-solid fa-envelope-open me-2"/>Lihat Surat
                            </Button>
                        </td>
                    </tr>
                    )}
                    </tbody>
            </Table>
        </>
    );
}

export {PerizinanList};