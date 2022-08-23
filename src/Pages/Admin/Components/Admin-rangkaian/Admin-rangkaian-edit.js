import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editAgenda, getAgendaById } from "../../../../Data/Agenda";

const RangkaianEdit = (props) => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const [image,setImage] = useState('');
    const [start_at,setStart_at] = useState('');
    const [end_at,setEnd_at] = useState('');

    useEffect(()=>{
        if(typeof props.editId !== "undefined")
        getAgendaById(props.editId)
        .then(res=>{
            setTitle(res.data?.title || '');
            setContent(res.data?.content || '');
            setStart_at(res.data?.start_at || '');
            setEnd_at(res.data?.end_at || '');
        })
    },[props.editId])

    const handleEdit = e => {
        e.preventDefault();
        editAgenda(props.editId,{title,content,image,start_at,end_at})
        .then(() => {
            alert("Perubahan berhasil disimpan");
            props.setEdit(false)
            window.location.reload();
        });
    }

    return(
        <Modal show={props.edit} onHide={()=>props.setEdit(false)} centered backdrop="static">
            <Modal.Header closeButton className="bg-dark text-white" closeVariant="white">
                <Modal.Title>Edit Rangkaian</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleEdit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Nama Rangkaian</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama rangkaian..." required value={title} onChange={e=>setTitle(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Penjelasan Singkat</Form.Label>
                        <Form.Control as="textarea" placeholder="Masukkan penjelasan singkat..." required value={content} onChange={e=>setContent(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Illustrasi Rangkaian</Form.Label>
                        <Form.Control type="file" onChange={e=>setImage(e.target.files[0])}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tanggal Mulai</Form.Label>
                        <Form.Control type="date" required value={start_at} onChange={e=>setStart_at(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Tanggal Berakhir</Form.Label>
                        <Form.Control type="date" required value={end_at} onChange={e=>setEnd_at(e.target.value)}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.setEdit(false)}>
                    Gajadi :(
                </Button>
                <Button variant="primary" type="submit">
                    Simpan
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
    );
}

export default RangkaianEdit;