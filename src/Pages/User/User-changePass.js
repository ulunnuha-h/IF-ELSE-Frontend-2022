import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { updateMahasiswaPass } from "../../Data/Mahasiswa";

const UserChangePass = (props) => {
    const [old,setOld] = useState('');
    const [new1,setNew1] = useState('');
    const [new2,setNew2] = useState('');
    const [msg,setMsg] = useState('');
    const [loading,setLoading] = useState(false);

    const handleChange = () => {
        setLoading(true);
        updateMahasiswaPass(old,new1,new2)
        .then(res => {
            if(res.data) {
                alert("Password berhasil diubah");
                setOld('');
                setNew1('');
                setNew2('');
                setMsg('');
                props.handleClosePass();
            }else{
                setMsg(res.response.data.message);
            }
            setLoading(false);
        });
    }

    return(
        <Modal show={props.editPass} onHide={props.handleClosePass} centered backdrop="static" style={{"backdropFilter":"blur(10px)"}}>
        <Modal.Header style={{"backgroundColor":"var(--color-1-p)","color":"white"}}>
          <Modal.Title>Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
        <form>
            <div className="mb-3">
                <label htmlFor="oldpassword" className="form-label">Old Password</label>
                <input type="password" className="form-control" id="oldpassword" value={old} onChange={e=>setOld(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="newpassword1" className="form-label">New Password</label>
                <input type="password" className="form-control" id="newpassword1" value={new1} onChange={e=>setNew1(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="newpassword2" className="form-label">New Password, again</label>
                <input type="password" className="form-control" id="newpassword2 " value={new2} onChange={e=>setNew2(e.target.value)} required/>
            </div>
            <div className="form-text">Passwordnya jangan sampe lupa ya ! sakit dilupakan :(</div>
        </form>
        </Modal.Body>
        {msg !== '' ? 
            <div className={msg === 'sukses' ? "alert alert-success m-3" : "alert alert-danger m-3"}>
                {msg}
            </div> : null}
        <Modal.Footer>
            <button className="btn-cancel py-2 px-4" onClick={props.handleClosePass}>Cancel</button>
            <button className="btn-save py-2 px-5" onClick={handleChange}>{loading ? "Checking..." : "Save"}</button>
        </Modal.Footer>
      </Modal>
    );
}

export default UserChangePass;