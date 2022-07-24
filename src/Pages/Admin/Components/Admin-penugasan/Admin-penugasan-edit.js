import moment from "moment";
import React from "react";
import { useState } from "react";
import { Modal,Form,Button } from "react-bootstrap";
import { getTugasId,editTugas,deleteTugas } from "../../../../Data/Penugasan";

const EditTugas = (props) => {
    const tugas = getTugasId(props.id);
    const [judul,setJudul] = useState(tugas.judul);
    const [deskripsi,setDeskripsi] = useState(tugas.deskripsi);
    const [ketentuan,setKetentuan] = useState(tugas.ketentuan);
    const [deadline,setDeadline] = useState(tugas.deadline);

    return(
        <Modal show={props.show} onHide={props.handleClose} backdrop="static" centered size="lg">
        <Modal.Header closeButton className="bg-dark text-light" closeVariant="white">
            <Modal.Title>Edit Tugas</Modal.Title>
        </Modal.Header>
        <Form onSubmit={e=>{
            e.preventDefault();
            editTugas({id : props.id,judul,deskripsi,ketentuan,deadline});
            props.handleClose();
        }}>
        <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan Judul" value={judul} onChange={(e)=>setJudul(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Masukkan Deskripsi" value={deskripsi} onChange={(e)=>setDeskripsi(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ketentuan</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Masukkan Ketentuan" value={ketentuan} onChange={(e)=>setKetentuan(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control value={moment(deadline).format('YYYY-MM-DD')} type="date" onChange={(e)=>setDeadline(e.target.valueAsDate)} required/>
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={()=>{props.handleClose();deleteTugas(props.id)}}>Hapus</Button>
            <Button variant="secondary" onClick={props.handleClose}>Gajadi :(</Button>
            <Button type="submit" variant="primary" >Simpan</Button>
        </Modal.Footer>
        </Form>
    </Modal>
    )
}

export default EditTugas;