import React, { useState } from "react";
import { Button,Table } from "react-bootstrap";
import { getAllAgenda } from "../../../../Data/Agenda";
import RangkaianTambah from "./Admin-rangkaian-tambah";
import RangkaianEdit from "./Admin-rangkaian-edit";
import Modal from 'react-bootstrap/Modal';

const RangkaianList = () => {
    const [agenda,setAgenda] = useState(getAllAgenda());
    const [tambah,setTambah] = useState(false);

    const [warn,setWarn] = useState(false);
    const [edit,setEdit] = useState(false);

    const [delId,setDelId] = useState();
    const [editId,setEditId] = useState();

    const handleDelete = id => {
        setDelId(id);
        setWarn(true);
        console.log(id);
    }

    const handleEdit = id => {
        setEditId(id);
        setEdit(true);
    }

    return(
        <>
        <RangkaianEdit {...{editId,setEditId,edit,setEdit}}/>
        <DeleteWarning {...{delId,setDelId,warn,setWarn}}/>
        <RangkaianTambah {...{tambah,setTambah}}/>
        <div className="d-flex justify-content-between mb-3">
            <h3 className="m-0">List Rangkaian</h3>
            <Button onClick={()=>setTambah(true)}><i className="fa-solid fa-plus me-1"></i>Tambah</Button>
        </div>
            <Table striped bordered hover responsive variant="dark" className="text-center">
                <thead>
                <tr>  
                    <th>ID</th>
                    <th className="text-start">Nama Rangkaian</th>
                    <th>Tanggal Mulai</th>
                    <th>Tanggal Berakhir</th>
                    <th>Aksi</th>
                </tr>
                </thead>
                <tbody>
                {agenda.map((val,idx) => 
                    <tr key={idx}>
                        <td>{val.id}</td>
                        <td className="col-6 text-start">{val.title}</td>
                        <td>{val.start_at}</td>
                        <td>{val.end_at}</td>
                        <td>
                            <Button className="mx-1" variant="secondary" onClick={()=>handleEdit(val.id)}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Button>
                            <Button className="mx-1" variant="danger" onClick={()=>handleDelete(val.id)}>
                                <i className="fa-solid fa-trash"></i>
                            </Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        </>
    );
}

export default RangkaianList;


const DeleteWarning = (props) => {
    return(
        <Modal show={props.warn} onHide={()=>props.setWarn(false)} centered backdrop="static">
            <Modal.Header closeButton className="bg-danger text-white" closeVariant="white">
                <Modal.Title>Warning !</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Apakah Anda yakin untuk menghapus rangkaian ini ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={()=>props.setWarn(false)}>
                    Gajadi :(
                </Button>
                <Button variant="primary">
                    Yakin
                </Button>
            </Modal.Footer>
        </Modal>
    );
}