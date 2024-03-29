import React from "react";
import { useState,useEffect } from "react";
import { Modal,Form,Button } from "react-bootstrap";
import { getTaskById,editTask,deleteTask} from "../../../../Data/Task";
import LoadingSpinner from "../../../../Components/Loading/LoadingSpinner";

const EditTugas = (props) => {
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [condition,setCondition] = useState("");
    const [step,setStep] = useState("");
    const [end_at,setEnd_at] = useState("");
    const [input,setInput] = useState("");
    const [label1,setLabel1] = useState("");
    const [label2,setLabel2] = useState("");
    const [loading,setLoading] = useState(false);

    const resetAll = () => {
        setTitle('');setDescription('');setCondition('');
        setStep('');setEnd_at('');setInput(0);setLabel1('');setLabel2('');
    }
    
    useEffect(()=>{
        getTaskById(props.id).then(res => {
            setTitle(res.data?.title || "")
            setDescription(res.data?.description || "")
            setCondition(res.data?.condition || "")
            setStep(res.data?.step || "")
            setEnd_at(res.data?.deadline || "")
            setInput(res.data?.jumlah_link || 0)
            setLabel1(res.data.Links[0]?.title || "")
            setLabel2(res.data.Links[1]?.title || "")
        });},[props.id])

    const editHandler = e => { 
        setLoading(true);
        e.preventDefault();
        const fields = [];
        if(input > 0) fields.push(label1);
        if(input > 1) fields.push(label2);
        editTask(props.id,{title,description,condition,step,deadline:end_at,jumlah_link:input,links:fields})
        .then(()=>{
            resetAll();
            setLoading(false);
            alert("Perubahan berhasil disimpan");
            props.handleClose();
        });
    }

    const handleDelete = id => {
        deleteTask(id).then(() => {props.handleClose()})
    } 

    return(
        <Modal show={props.show} onHide={props.handleClose} backdrop="static" centered size="lg">
        <Modal.Header closeButton className="bg-dark text-light" closeVariant="white">
            <Modal.Title>Edit Tugas</Modal.Title>
        </Modal.Header>
        <Form onSubmit={editHandler}>
        <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Label>Judul</Form.Label>
                    <Form.Control type="text" placeholder="Masukkan title" value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control as="textarea" rows={20} placeholder="Masukkan Deskripsi" value={description} onChange={(e)=>setDescription(e.target.value)} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Ketentuan</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Masukkan Ketentuan" value={condition} onChange={(e)=>setCondition(e.target.value)} required/>
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
                    <Form.Control value={end_at} type="datetime-local" onChange={(e)=>setEnd_at(e.target.value)} required/>
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={()=>{handleDelete(props.id)}}>Hapus</Button>
            <Button variant="secondary" onClick={props.handleClose}>Gajadi :(</Button>
            <Button type="submit" variant="primary" >{loading ? <LoadingSpinner/> : "Simpan"}</Button>
        </Modal.Footer>
        </Form>
    </Modal>
    )
}

export default EditTugas;