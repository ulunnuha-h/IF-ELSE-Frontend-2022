import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { Modal,Form,Button } from "react-bootstrap";
import { getTugasId } from "../../Data/Penugasan";
import { editTugas } from "../../Data/Penugasan";

const EditTugas = (props) => {
    const tugas = getTugasId(props.id);
    const [judul,setJudul] = useState('');
    const [deskripsi,setDeskripsi] = useState('');
    const [ketentuan,setKetentuan] = useState('');
    const [deadline,setDeadline] = useState('');

    useEffect(()=>{
        setJudul(tugas.judul);
        setDeskripsi(tugas.deskripsi);
        setKetentuan(tugas.ketentuan);
        setDeadline(tugas.deadline);
    },[tugas]);

    const ubahTugas = () => {
        editTugas({id : props.id,judul,deskripsi,ketentuan,deadline});
    }

    return(
        <Modal show={props.show} onHide={props.handleClose} backdrop="static" centered size="lg">
        <Modal.Header closeButton className="bg-dark text-light" closeVariant="white">
            <Modal.Title>Edit Tugas</Modal.Title>
        </Modal.Header>
        <Form onSubmit={e=>{
            e.preventDefault();
            ubahTugas();
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
                    <Form.Control as="textarea" rows={3} placeholder="Masukkan Deskripsi" value={ketentuan} onChange={(e)=>setKetentuan(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control value={moment(deadline).format('YYYY-MM-DD')} type="date" onChange={(e)=>setDeadline(e.target.valueAsDate)} required/>
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>Gajadi :(</Button>
            <Button type="submit" variant="primary" >Simpan</Button>
        </Modal.Footer>
        </Form>
    </Modal>
    )
}

export default EditTugas;