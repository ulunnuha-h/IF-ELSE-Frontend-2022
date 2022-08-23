import React, { useState } from "react";
import { Table,Modal } from "react-bootstrap";
import { getTaskById } from "../../../../Data/Task";
import { toLocalDate } from "../../../../Config/Converter";

const TugasMahasiswa = (props) => {    
    const [detail,setDetail] = useState(false);
    const [detailData,setDetailData] = useState('');    

    const openDetail = link => {
        setDetailData(link);
        setDetail(true);
    }

    const checkSubmit = (date) => {
        if(date === "0001-01-01T00:00:00Z") return("Belum Mengumpulkan");
        else return toLocalDate(date);
    }


    const list =(props.StudentTask !== null ? props.StudentTask.map((dat,idx) => {
        return (
            <tr key={idx}>
                <td>{dat.task_title}</td>
                <td>{dat.label_link}</td>
                <td>{checkSubmit    (dat.time)}</td>
                <td className="col-1">
                    <button className="btn btn-primary" onClick={()=>openDetail(dat.link)}>Detail</button>
                </td>
            </tr>
        );
    }) : [])

    return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
            <DetailTugas {...{detail,detailData,setDetail}}/>
            <h3>Tugas Mahasiswa Terkait</h3>
            <hr></hr>
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>  
                        <th>Judul Tugas</th>
                        <th>Label Link</th>
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
            <a href={`//${props.detailData}`} target="blank">{props.detailData}</a>
        </Modal.Body>
      </Modal>
    );
}