import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { getKelompokById,updateKelompok } from "../../../../Data/Kelompok";

const EditKelompok = (props) => {
    const kelompokId = props.id;
    const [data,setData] = useState([]);
    const [kelompok,setKelompok] = useState('');
    const [link,setLink] = useState('');
    const [pendamping,setPendamping] = useState('');
    const [line,setLine] = useState('');
    const [img,setImg] = useState('');


    useEffect(()=>{
        getKelompokById(kelompokId)
        .then(res =>
            {
                setData(res.data);
            });
    },[])

    useEffect(()=>{
        setKelompok(data.group_name);
        setLink(data.line_group);
        setPendamping(data.companion_name);
        setLine(data.id_line);
        setImg(data.file)
    },[data])

    const updatingKelompok = () => {
        const form = new FormData();
        form.append("group_name",kelompok);
        form.append("line_group",link);
        form.append("companion_name",pendamping);
        form.append("id_line",line);
        form.append("file",img);
        updateKelompok(data.id,form).then(res=> console.log(res));
    }

    return(
        <>
        <Modal show={props.edit} onHide={()=>props.setEdit(false)} centered backdrop="static">
            <Modal.Header closeButton className="bg-dark text-white" closeVariant="white">
                <Modal.Title>Tambah Qelompok</Modal.Title>
            </Modal.Header>
            <Form onSubmit={e=>{
                    e.preventDefault();
                    updatingKelompok();
                    props.setEdit(false);
                }}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>Nama Kelompok</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama kelompok..." required value={kelompok} onChange={e=>setKelompok(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Link Grup</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Link grup..." required value={link} onChange={e=>setLink(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Nama Pendamping</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan nama pendamping..." required value={pendamping} onChange={e=>setPendamping(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>ID LINE Pendamping</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan ID Line pendamping..." required value={line} onChange={e=>setLine(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Upload foto pendamping</Form.Label>
                        <Form.Control type="file" onChange={e=>setImg(e.target.files[0])}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.setEdit(false)}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
        </>
    );
}

export default EditKelompok;