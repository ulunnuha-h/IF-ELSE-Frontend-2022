import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button,Table } from "react-bootstrap";
import { getPerizinanByRangkaian } from "../../../../Data/Perizinan";
import { getKelompokNameById } from "../../../../Data/Kelompok";
import { getAgendaStatus, updateAgendaStatus } from "../../../../Data/Agenda";

const RangkaianList = () => {
    const rangkaian = parseInt(useParams().id);
    const data = getPerizinanByRangkaian(rangkaian);
    const [status,setStatus] = useState({});
    const handleStatus = () => setStatus(updateAgendaStatus(rangkaian));

    useEffect(()=>{
        setStatus(getAgendaStatus(rangkaian));
    },[rangkaian])

    return(
        <>
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
                        <td className="col-2"><Button className="w-100">Lihat Surat</Button></td>
                    </tr>
                    )}
                    </tbody>
            </Table>
        </>
    );
}

export {RangkaianList};