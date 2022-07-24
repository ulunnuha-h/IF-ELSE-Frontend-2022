import React from "react";
import Modal from 'react-bootstrap/Modal';

const KelompokDeleteWarning = (props) =>{
    return(
        <>
            <Modal show={props.warn} onHide={()=>props.setWarn(false)} centered backdrop="static">
                <Modal.Header closeButton className="bg-danger text-white" closeVariant="white">
                    <Modal.Title>Warning !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Silakan kosongkan Data Mahasiswa di dalam kelompok ini terlebih dahulu sebelum dihapus !
                </Modal.Body>
            </Modal>
        </>
    );
}

export default KelompokDeleteWarning;