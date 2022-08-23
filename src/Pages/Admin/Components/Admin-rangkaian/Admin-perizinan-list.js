import React, { useEffect, useState } from "react";
import { Button,Table } from "react-bootstrap";
import { getPerizinanByRangkaian } from "../../../../Data/Perizinan";
import { getAgendaById, getAllAgenda, updateAgendaStatus } from "../../../../Data/Agenda";
import LoadingSpinner from "../../../../Components/Loading/LoadingSpinner";

const cursor = {
    style : { cursor : 'pointer' }
}

const PerizinanList = (props) => {
    const [status,setStatus] = useState('');
    const [idRangkaian,setIdRangkaian] = useState(1);
    const [agenda,setAgenda] = useState([]);
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [agendaLoad,setAgendaLoad] = useState(false);

    const handleStatus = () => {
        updateAgendaStatus(status,idRangkaian)
        .then(res => setStatus(res?.data || ''));
    }

    useEffect(()=>{
        getAllAgenda().then(res => {
            if(res?.data !== null) setAgenda(res.data);
            setLoading(false);
        });
    },[])

    const handleRangkaian = id => setIdRangkaian(id);
    const navStyle = (id) => (id === idRangkaian ? "nav-link active" : "nav-link");

    useEffect(()=>{
        setAgendaLoad(true);
        getPerizinanByRangkaian(idRangkaian)
        .then(res => {
            if(res.response?.status === 403){
                props.setErr(res.response.data.message);
            }
            else if (res?.data !== null)setData(res.data);
            else{
                setData([]);
            }
            setAgendaLoad(false);
        });
        getAgendaById(idRangkaian)
        .then(res => setStatus(res.data?.is_published || ''));
    },[idRangkaian,props])

    if(loading) return(<LoadingSpinner/>);

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
                    {agendaLoad ? 
                    <tbody>
                        <tr>
                            <td>Loading...</td>
                        </tr>
                    </tbody>
                    :
                    <tbody>
                    {!data ?  
                    <tr>
                        <td>No Data</td>
                    </tr>
                    :data.map((val,idx) => 
                    <tr key={idx}>
                        <td className="col-4">{val.name}</td>
                        <td className="col-3">{val.nim}</td>
                        <td className="col-3">{val.group_name}</td>
                        <td className="col-2 text-center">
                            <a href={`//${val.link_surat}`} target="blank">
                                <Button>
                                    <i className="fa-solid fa-envelope-open me-2"/>Lihat Surat
                                </Button>
                            </a>
                        </td>
                    </tr>
                    )}
                    </tbody>
                    }
            </Table>
        </>
    );
}

export {PerizinanList};