import React, { useEffect, useState } from "react";
import { Table,Modal } from "react-bootstrap";
import { getAllStudenTaskByUserId } from "../../../../Data/StudentTask";
import { getTaskById } from "../../../../Data/Task";

const TugasMahasiswa = (props) => {
    const data = getAllStudenTaskByUserId(props.userId).data;
    const [detail,setDetail] = useState(false);
    const [detailData,setDetailData] = useState(null);
    const [index,setIndex] = useState(0);

    const openDetail = idx => {
        setIndex(idx);
        setDetail(true);
    }

    useEffect(()=>{
        setDetailData(data[index].submission);
    },[index,data])

    const list = data.map((dat,idx) => {
        const taskName = getTaskById(dat.task_id).title;
        return (
            <tr key={idx}>
                <td>{taskName}</td>
                <td>{dat.submitted_at !== '' ? dat.submitted_at : 'Belum mengumpulkan'}</td>
                <td className="col-1">
                    <button className="btn btn-primary" onClick={()=>openDetail(idx)}>Detail</button>
                </td>
            </tr>
        );
    })

    return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
            <DetailTugas {...{detail,detailData,setDetail}}/>
            <h3>Tugas Mahasiswa Terkait</h3>
            <hr></hr>
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>  
                        <th>Judul</th>
                        <th>Tanggal disubmit</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {list}
                </tbody>
            </Table>
        </div>
    );
}

export default TugasMahasiswa;

const DetailTugas = (props) => {
    const handleClose = () => props.setDetail(false);

    return(
        <Modal show={props.detail} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>Link yang di submit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.detailData !== null ? 
            <>
                <section>{props.detailData[0]}</section>
                <hr></hr>
                <section>{props.detailData[1]}</section>
            </>
            : "--Belum mengumpulkan zheyeng--"}
        </Modal.Body>
      </Modal>
    );
}