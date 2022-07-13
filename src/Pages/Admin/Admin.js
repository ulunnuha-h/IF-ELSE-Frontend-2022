import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminLogin from "./Admin-login";
import pic from '../../Assets/Logo/logo-ifelse.png';
import './Admin.css';

const Admin = () => {
    const [log,setLog] = useState(false);
    
    const login = () => {
        setLog(!log);
    }

    const toggle = () => {
        const side = document.getElementById("sidebar");
        if(side.classList.contains("aktif")) side.classList.remove("aktif");
        else side.classList.add("aktif");
    }

    if(!log) return <AdminLogin login={login}/>;
    else{
        return(
            <main className="admin row w-100 m-0" style={{"height":"100vh"}}>
                <div id="sidebar" className="col-md-3 col-12 p-0 h-100 aktif bg-warning" >
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="w-25">
                            <img src={pic} className="my-3 img-fluid" alt="logo"></img>
                        </span>
                        <i className="fa-solid fa-x px-4 display-4 d-block d-md-none" onClick={()=>toggle()}></i>
                    </div>                    
                    <ul className="navbar-nav w-100">
                        <li className="nav-item p-3"><i className="fa-solid fa-gauge me-2"></i>Dashboard</li>
                        <hr className="m-0"></hr>
                        <li className="nav-item p-3"><i className="fa-solid fa-newspaper me-2"></i>Berita</li>
                        <li className="nav-item p-3"><i className="fa-solid fa-calendar me-2"></i>Acara</li>
                        <li className="nav-item p-3"><i className="fa-solid fa-thumbtack me-2"></i>Penugasan</li>
                        <li className="nav-item p-3"><i className="fa-solid fa-list-check me-2"></i>Quiz</li>
                        <hr className="m-0"></hr>
                        <li className="nav-item p-3"><i className="fa-solid fa-people-group me-2"></i>Kelompok</li>
                        <li className="nav-item p-3"><i className="fa-solid fa-user me-2"></i>Presensi</li>
                    </ul>
                </div>
                <div
                    id="admin-content" 
                    className="col-md-9 col-12 p-0">
                    <nav className="w-100 m-0 p-3 d-flex justify-content-between bg-warning">
                        <span className="d-block d-md-none">
                            <i className="fa-solid fa-burger" onClick={()=>toggle()}></i>
                        </span>
                        <span className="d-none d-md-block">
                            Halo, Admin !
                        </span>
                        <span className="logout" onClick={()=>login()}>
                            <i className="fa-solid fa-right-from-bracket me-1"></i>
                            Logout
                        </span>
                    </nav>
                    <Outlet/>
                    <footer className="p-3 text-center bg-warning">
                        Developed by IT x DDM IF ELSE © 2022
                    </footer>
                </div>
            </main>
        );
    }
}

export default Admin;