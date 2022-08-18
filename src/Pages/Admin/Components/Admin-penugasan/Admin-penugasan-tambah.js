import React, { useState } from "react";
import { Button,Modal,Form } from "react-bootstrap";
import { addTask } from "../../../../Data/Task";

const TambahTugasModal = (props) =>{
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [condition,setCondition] = useState('');
    const [step,setStep] = useState('');
    const [end_at,setEnd_at] = useState('');
    const [input,setInput] = useState(0);
    const [label1,setLabel1] = useState('');
    const [label2,setLabel2] = useState('');

    const resetAll = () => {
        setTitle('');setDescription('');setCondition('');
        setStep('');setEnd_at('');setInput('');setLabel1('');setLabel2('');
    }

    const tambahTugas = () => { 
        const fields = [];
        if(input > 0) fields.push(label1);
        if(input > 1) fields.push(label2);
        addTask({title,description,condition,step,deadline:end_at,jumlah_link:input,links:fields}).then(res=>console.log(res));
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
            resetAll();
            props.handleClose();
        }}>
        <Modal.Body>
            
                <Form.Group className="mb-3">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan judul" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={20} placeholder="Masukkan deskripsi tugas" value={description} onChange={(e)=>setDescription(e.target.value)} required/>
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
                {input > 0 && <Form.Group className="mb-3">
                    <Form.Label>Label link 1</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan label link 1" value={label1} onChange={e=>setLabel1(e.target.value)} required/>
                </Form.Group>}
                { input > 1 && <Form.Group className="mb-3">
                    <Form.Label>Label link 2</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan label link 2" value={label2} onChange={e=>setLabel2(e.target.value)} required/>
                </Form.Group>}

                <Form.Group className="mb-3">
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control type="datetime-local" value={end_at} onChange={(e)=>setEnd_at(e.target.value)} required/>
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