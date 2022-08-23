import React, { useEffect, useState } from "react";
import { Table,Modal,Form } from "react-bootstrap";
import { updateStudentMark } from "../../../../Data/Marking";

const NilaiMahasiswa = (props) => {
    const data = props.Marking;
    const [nilai,setNilai] = useState(false);
    const [dataNilai,setDataNilai] = useState(0);
    const [agendaId,setAgendaId] = useState(0);
    const [userId,setUserId] = useState(0);

    const openDetail = (idx) => {
        setDataNilai(data[idx].mark);
        setAgendaId(data[idx].agenda_id);
        setUserId(props.userId);
        setNilai(true);
    }
    
    const list = data.map((dat,idx) => {
        return (
            <tr key={idx}>
                <td>{dat.Agenda.title}</td>
                <td>{dat.mark === null ? "Belum diatur" : dat.mark}</td>
                <td className="col-2">
                    <button className="btn btn-primary" onClick={()=>openDetail(idx)}>Atur Nilai</button>
                </td>
            </tr>
        );
    })

    return(
        <div className="m-2 p-3 m-md-4 p-md-4 bg-dark text-light rounded">
            <DetailNilai {...{nilai,setNilai,dataNilai,agendaId,userId}}/>
            <h3>Nilai Mahasiswa Terkait</h3>
            <hr></hr>
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>  
                        <th>Nama Rangkaian</th>
                        <th>Nilai</th>
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

export default NilaiMahasiswa;

const DetailNilai = (props) => {
    const handleClose = () => props.setNilai(false); 
    const [nilai,setNilai]  = useState();
    const [agendaId,setAgendaId] = useState();
    const [userId,setUserId] = useState();

    useEffect(()=>{
        setNilai(props.dataNilai);
        setAgendaId(props.agendaId);
        setUserId(props.userId);
    },[props])

    const saveNilai = e => {
        e.preventDefault();
        updateStudentMark(agendaId,userId,nilai)
        .then(res => {
            alert("Update nilai berhasil");
            handleClose();
            window.location.reload();
        })
    }

    return(
        <Modal show={props.nilai} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
            <Modal.Title>Atur Nilai Mahasiswa</Modal.Title>
        </Modal.Header>
        <form onSubmit={saveNilai}>
            <Modal.Body>
                <Form.Label>Masukkan Nilai : </Form.Label>
                <Form.Control type="number" min={0} max={100} value={nilai} onChange={e=>setNilai(e.target.value)} placeholder="Nilai maszeh..." />
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-primary" type="submit">Simpan</button>
            </Modal.Footer>
            </form>
        </Modal>
    );
}

