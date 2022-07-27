import React, { useEffect, useState } from "react";
import { Button,Table } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getPendataanDay,togglePendataanDay } from "../../../../Data/Pendataan";
import { PendataanDetail } from "./Admin-pendataan-detail";

const ListPendataan = () => {
    const rangkaian = parseInt(useParams().rangkaian);
    const data = getPendataanDay(rangkaian);
    const [show,setShow] = useState(false);
    const [id,setId] = useState(1);
    const [open,setOpen] = useState(data.isOpen);

    useEffect(()=>{
        setOpen(data.isOpen);
    },[data]);
    
    const handleClose = () => setShow(false);

    const detailHandle = (idx) =>{
        setId(idx);
        setShow(true);
    }

    return(
        <>
            <PendataanDetail handleClose={handleClose} show={show} rangkaian={rangkaian} id={id}/>
            <div className="form-check form-switch my-2">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={open} onChange={()=>{setOpen(togglePendataanDay(rangkaian))}}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{open ? "Dibuka" : "Ditutup"}</label>
            </div>
            <Table striped bordered hover responsive variant="dark">
                    <thead>
                    <tr>  
                        <th>Nama</th>
                        <th>Kepentingan</th>
                        <th>Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.data.map((data,idx)=>
                    <tr key={idx}>
                        <td className="col-5">{data.nama}</td>
                        <td className="col-6">{data.kepentingan}</td>
                        <td className="col-1"><Button onClick={()=>detailHandle(idx)} className="w-100">Detail</Button></td>
                    </tr>
                    )}
                    </tbody>
            </Table>
        </>
    );
}

export default ListPendataan;