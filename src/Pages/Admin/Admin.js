import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AdminLogin from "./Admin-login";
import pic from '../../Assets/Logo/logo-ifelse.png';
import './Admin.css';
import { motion } from "framer-motion";

const Admin = () => {
    const nav = useNavigate();

    const logOut = () =>  {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('user');
    };

    const toggle = () => {
        const side = document.getElementById("sidebar");
        if(side.classList.contains("aktif")) side.classList.remove("aktif");
        else side.classList.add("aktif");
    }

    if(localStorage.getItem('adminToken') == null) return <AdminLogin/>;
    else{
        return(
            <main className="admin row w-100 m-0 bg-secondary" style={{"height":"100vh"}}>
                <motion.div 
                    animate={{x:0}} 
                    initial={{x:-500}} 
                    transition={{type:"tween",ease:"circOut"}} 
                    id="sidebar" 
                    className="col-md-2 col-12 p-0 h-100 aktif bg-dark text-light" >
                    <div className="d-flex justify-content-between align-items-center">
                    <div className="w-100 d-flex align-items-center">
                        <span style={{"width":"20%"}}>
                            <img src={pic} className="m-3 img-fluid" style={{"backgroundColor":"var(--color-3)","borderRadius":"50%"}} alt="logo"></img>
                        </span>
                        <span className="ms-4">
                            <h4 className="m-0">IF ELSE</h4>
                            <span>Admin Dashboard</span>
                        </span>
                    </div>
                        <i className="fa-solid fa-x px-4 display-4 d-block d-md-none" onClick={()=>toggle()}></i>
                    </div>                    
                    <ul className="navbar-nav w-100">
                        <li className="nav-item p-3" onClick={()=>{nav('');toggle()}}><i className="fa-solid fa-gauge me-2"></i>Dashboard</li>
                        <span className="px-2 d-flex align-items-center">Humas<hr className="mx-3 w-100"></hr></span>
                        <li className="nav-item  p-3" onClick={()=>{nav('berita');toggle()}}><i className="fa-solid fa-newspaper me-2"></i>Berita</li>
                        <span className="px-2 d-flex align-items-center">QE<hr className="mx-3 w-100"></hr></span>
                        <li className="nav-item p-3" onClick={()=>{nav('rangkaian');toggle()}}><i className="fa-solid fa-calendar me-2"></i>Rangkaian</li>
                        <li className="nav-item p-3" onClick={()=>{nav('penugasan');toggle()}}><i className="fa-solid fa-thumbtack me-2"></i>Penugasan</li>
                        <span className="px-2 d-flex align-items-center">Pendamping<hr className="mx-3 w-100"></hr></span>
                        <li className="nav-item p-3" onClick={()=>{nav('kelompok');toggle()}}><i className="fa-solid fa-people-group me-2"></i>Kelompok</li>
                    </ul>
                </motion.div>
                <div
                    id="admin-content" 
                    className="col-md-10 col-12 p-0 bg-secondary">
                    <motion.nav animate={{y:0}} initial={{y:-200}} transition={{type:"tween",ease:"circOut"}} className="w-100 m-0 p-3 d-flex justify-content-between bg-dark text-light">
                        <span className="d-block d-md-none">
                            <i className="fa-solid fa-burger" onClick={()=>toggle()}></i>
                        </span>
                        <span className="d-none d-md-block">
                            Halo, {localStorage.getItem('user') || ''} !
                        </span>
                        <span className="logout" onClick={()=>{nav('');logOut()}}>
                            <i className="fa-solid fa-right-from-bracket me-1"></i>
                            Logout
                        </span>
                    </motion.nav>
                    <Outlet/>
                    <footer className="p-3 text-center bg-dark text-light">
                        Developed by IT x DDM IF ELSE © 2022
                    </footer>
                </div>
            </main>
        );
    }
}

export default Admin;