import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addKelompok } from "../../../../Data/Kelompok";

const TambahKelompok = (props) => {
    const [kelompok,setKelompok] = useState('');
    const [link,setLink] = useState('');
    const [pendamping,setPendamping] = useState('');
    const [line,setLine] = useState('');
    const [img,setImg] = useState('');

    const [loading,setLoading] = useState(false);

    const tambahKelompok = () => {
        const form = new FormData();
        form.append("group_name",kelompok);
        form.append("line_group",link);
        form.append("companion_name",pendamping);
        form.append("id_line",line);
        form.append("file",img);
        setLoading(true);
        addKelompok(form).then(() =>{
            setLoading(false);
            props.setTambah(false);
        });
    }

    return(
        <>
        <Modal show={props.tambah} onHide={()=>props.setTambah(false)} centered backdrop="static">
            <Modal.Header closeButton className="bg-dark text-white" closeVariant="white">
                <Modal.Title>Tambah Qelompok</Modal.Title>
            </Modal.Header>
            { !loading ? 
            <Form onSubmit={e=>{
                    e.preventDefault();
                    tambahKelompok();
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
                        <Form.Control type="file" required onChange={e=>setImg(e.target.files[0])}/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.setTambah(false)}>
                    Close
                </Button>
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </Modal.Footer>
            </Form> :
            <div className="w-100 p-3 d-flex justify-content-center">
                Uploading <div className="spinner-border" role="status"/>
            </div>
            }
        </Modal>
        </>
    );
}

export default TambahKelompok;