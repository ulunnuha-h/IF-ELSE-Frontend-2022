import React from 'react';
import { getPendataanDayDetail } from '../../Data/Pendataan';
import Modal from 'react-bootstrap/Modal';

function PendataanDetail(props) {
    const data = getPendataanDayDetail(props.rangkaian,props.id);

    return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered size='lg'>
        <Modal.Header closeButton className='bg-dark text-light' closeVariant='white'>
          <Modal.Title>Detail Perizinan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <section className='row px-4'>
                <section className='p-2 my-md-2 col-12 col-md-2'>Nama</section>
                <section className='border border-secondary col-12 col-md-10 p-2 my-2 rounded'>{data.nama}</section>
            </section>
            <section className='row px-4'>
                <section className='p-2 my-md-2 col-12 col-md-2'>Kepentingan</section>
                <section className='border border-secondary col-12 col-md-10 p-2 my-2 rounded'>{data.kepentingan}</section>
            </section>
        </Modal.Body>
      </Modal>
    </>
  );
}

export {PendataanDetail};