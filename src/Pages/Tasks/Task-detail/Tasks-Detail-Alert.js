import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { updateStudentTasksubmission } from '../../../Data/StudentTask';

const TaskAlert = (props) => {
    const nav = useNavigate();

    const handleClose = () => props.setAlert(false);
    const handleSubmit = () => {
    updateStudentTasksubmission(props.userId,props.taskId,props.submitted);
    nav('');
    props.setAlert(false);
    }

    return (
    <>
        <Modal show={props.alert} onHide={handleClose} backdrop="static" centered style={{backdropFilter:'blur(2px)'}}>
            <Modal.Header style={{backgroundColor:"var(--color-2-p)"}} closeButton closeVariant='white'>
              <Modal.Title className='text-white' >PERHATIAN !</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Silakan periksa kembali submitted link anda karena setelah menekan "Gas dong 🔥" link tidak dapat diubah
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Gajadi :(
                </Button>
                <Button variant="primary" onClick={handleSubmit} style={{backgroundColor:"var(--color-2-p)"}}>
                    Gas dong 🔥
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default TaskAlert;