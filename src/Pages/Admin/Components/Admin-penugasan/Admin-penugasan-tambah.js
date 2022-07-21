import React, { useState } from "react";
import { Button,Modal,Form } from "react-bootstrap";
import { addTugas } from "../../Data/Penugasan";

const TambahTugasModal = (props) =>{
    const [judul,setJudul] = useState('');
    const [deskripsi,setDeskripsi] = useState('');
    const [ketentuan,setKetentuan] = useState('');
    const [deadline,setDeadline] = useState('');

    const tambahTugas = () => {
        addTugas({judul,deskripsi,ketentuan,deadline});
    }

    return(
    <>
    <Modal show={props.show} onHide={props.handleClose} backdrop="static" centered size="lg">
        <Modal.Header closeButton className="bg-dark text-light" closeVariant="white">
            <Modal.Title>Tambah Tugas</Modal.Title>
        </Modal.Header>
        <Form onSubmit={e=>{
            e.preventDefault();
            tambahTugas();
            setJudul('');
            setDeskripsi('');
            setKetentuan('');
            setDeadline('');
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
                    <Form.Control type="date" onChange={(e)=>setDeadline(e.target.valueAsDate)} required/>
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>Gajadi :(</Button>
            <Button variant="primary" type="submit">Simpan</Button>
        </Modal.Footer>
        </Form>
    </Modal>
    </>
    );
}

export default TambahTugasModal;