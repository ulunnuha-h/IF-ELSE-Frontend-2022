import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { updateMahasiswaPicture } from "../../Data/Mahasiswa";
import './UpdatePicture.css';
import LoadingSpinner from "../Loading/LoadingSpinner";

const UpdatePicture = (props) => {
    const handleClose = () => props.setEditPicture(false);
    const [file,setFile] = useState();
    const [max,setMax] = useState(false);
    const [preview,setPreview] = useState('');
    const [loading,setLoading] = useState(false);

    const updating = e =>{
        setLoading(true);
        e.preventDefault();
        if(max) alert("Gambarnya kebesaran maszehh");
        else{
            updateMahasiswaPicture(file)
            .then(() => {
                setPreview('');
                setFile('');
                setLoading(false);
                handleClose();
                window.location.reload();
            });
        }
    }

    const uploading = e =>{
        const fsize = Math.round((e.target.files[0].size / 1024));
        const furl = URL.createObjectURL(e.target.files[0]);
        if(fsize > 500) setMax(true);
        else {
            setMax(false);
            setFile(e.target.files[0]);
            setPreview(furl);
        }
    }

    return(
    <Modal show={props.editPicture} onHide={handleClose} centered backdrop="static" style={{"backdropFilter":"blur(10px)"}}>
        <Modal.Header style={{"backgroundColor":"var(--color-1-p)","color":"white"}}>
            <Modal.Title>Update Profile Picture</Modal.Title>
        </Modal.Header>
        <form onSubmit={updating}>
        <Modal.Body className="px-4 d-flex flex-column">
            {max ?
            <div className="alert alert-danger" role="alert">
                Gambarnya kebesaran, max 500kb
            </div>
            : 
            (preview !== '' ? <img src={preview} alt="preview"/> : null)}
            <label htmlFor="propic" className="mt-3">Upload Image</label>
            <input className="profile-image-input p-2 rounded w-100" type="file" name="propic" required onChange={uploading}/>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn-cancel py-2 px-4" onClick={handleClose} type="button">Cancel</button>
            <button disabled={loading} className="btn-save py-2 px-4" type="submit">{loading ? <>Uploading <LoadingSpinner/></> : "Save"}</button>
        </Modal.Footer>
        </form>
    </Modal>
    );
}

export default UpdatePicture;