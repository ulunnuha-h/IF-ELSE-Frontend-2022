import React, { useState } from "react";
import { Button,Modal,Form } from "react-bootstrap";
import { addTugas } from "../../../../Data/Penugasan";

const TambahTugasModal = (props) =>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [condition,setCondition] = useState('');
    const [step,setStep] = useState('');
    const [end_at,setEnd_at] = useState('');
    const [input,setInput] = useState(0);

    const tambahTugas = () => {
        addTugas({title,description,condition,end_at});
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
            setTitle('');
            setDescription('');
            setCondition('');
            setEnd_at('');
            props.handleClose();
        }}>
        <Modal.Body>
            
                <Form.Group className="mb-3">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan judul" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Masukkan deskripsi tugas" value={description} onChange={(e)=>setDescription(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ketentuan</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Masukkan ketentuan tugas" value={condition} onChange={(e)=>setCondition(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Cara</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Masukkan cara mengerjakan tugas" value={step} onChange={(e)=>setStep(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Jumlah link</Form.Label>
                    <Form.Control type="number" min={0} max={2} placeholder="Masukkan jumlah input link" value={input} onChange={e=>setInput(parseInt(e.target.value))} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Jumlah link</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan jumlah input link" value={input} onChange={e=>setInput(parseInt(e.target.value))} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Jumlah link</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan jumlah input link" value={input} onChange={e=>setInput(parseInt(e.target.value))} required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control type="datetime-local" onChange={(e)=>setEnd_at(e.target.valueAsDate)} required/>
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