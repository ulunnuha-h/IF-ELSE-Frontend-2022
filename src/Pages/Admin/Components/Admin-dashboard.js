import React from "react";
import { useNavigate } from "react-router-dom";
import '../Admin.css';

const AdminDashboard = () => {
    const nav = useNavigate();

    return(
        <div className="d-flex flex-column justify-content-center align-items-center" style={{"minHeight":"90vh",boxSizing:'border-box'}}>
            <span className="mt-5 mt-lg-0 w-75 display-3 text-center"><b>Selamat Datang di Admin Dashbord IF ELSE 2022 !</b></span>
            <hr className="w-50"></hr>
            <p>Apa yang akan kamu lakukan hari ini ?</p>
            <div className="row row-cols-1 row-cols-lg-4 w-75">
                <section className="mb-3" onClick={()=>nav('berita')}>
                    <div className="bg-dark p-3 rounded shortcut">
                        <i className="fa-solid fa-newspaper h1"/>
                        <h5 className="m-0">Berita</h5>
                    </div>
                </section>
                <section className="mb-3" onClick={()=>nav('rangkaian')}>
                    <div className="bg-dark p-3 rounded shortcut">
                        <i className="fa-solid fa-calendar h1"/>
                        <h5 className="m-0">Rangkaian</h5>
                    </div>
                </section>
                <section className="mb-3" onClick={()=>nav('penugasan')}>
                    <div className="bg-dark p-3 rounded shortcut">
                        <i className="fa-solid fa-thumbtack h1"/>
                        <h5 className="m-0">Penugasan</h5>
                    </div>
                </section>
                <section className="mb-3" onClick={()=>nav('kelompok')}>
                    <div className="bg-dark p-3 rounded shortcut">
                        <i className="fa-solid fa-people-group h1"/>
                        <h5 className="m-0">Kelompok</h5>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default AdminDashboard;