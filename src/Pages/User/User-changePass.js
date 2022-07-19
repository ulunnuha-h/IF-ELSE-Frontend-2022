import React from "react";
import Modal from 'react-bootstrap/Modal';

const UserChangePass = (props) => {
    return(
        <Modal show={props.show} onHide={props.handleClose} centered backdrop="static">
        <Modal.Header style={{"backgroundColor":"var(--color-1-p)","color":"white"}}>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
        <form>
            <div class="mb-3">
                <label htmlFor="oldpassword" className="form-label">Old Password</label>
                <input type="password" className="form-control" id="oldpassword"/>
            </div>
            <div class="mb-3">
                <label htmlFor="newpassword1" className="form-label">New Password</label>
                <input type="password" className="form-control" id="newpassword1"/>
            </div>
            <div class="mb-3">
                <label htmlFor="newpassword2" className="form-label">New Password, again</label>
                <input type="password" className="form-control" id="newpassword2"/>
            </div>
            <div className="form-text">Passwordnya jangan sampe lupa ya ! sakit dilupakan :(</div>
        </form>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn-cancel py-2 px-4" onClick={props.handleClose}>Cancel</button>
            <button className="btn-save py-2 px-5" onClick={props.handleClose}>Save</button>
        </Modal.Footer>
      </Modal>
    );
}

export default UserChangePass;