import React, { useEffect, useState } from "react";
import { Outlet} from "react-router-dom";
import UserCard from "../../Components/UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import './User.css';
import { motion } from "framer-motion";
import bg from "../../Assets/user-bg.jpg";
import UserChangePass from "./User-changePass";
import { getMahasiswaProfile } from "../../Data/Mahasiswa";

const User = () => {
    const nav = useNavigate();
    const [editPass, setEditPass] = useState(false);
    const [editProfile,setEditProfile] = useState(false);
    const [data,setData] = useState('');
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getMahasiswaProfile().then(res => {
            if(res.data !== null) setData(res.data);
            else{
                localStorage.removeItem('token');
                nav('/mahasiswa/login');
            }
            setLoading(false);
        });
    },[])

    const percentage = 3 ;

    const toggleEditProfile = () => {
        setEditProfile(!editProfile);
        nav('/user');
    }

    const progres = {
        background: `linear-gradient(90deg, var(--color-1-p) ${percentage}%,gray ${percentage}%)`,
        color :'lightgray'
    }

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload();
        nav("/");
    }

    const handleClosePass = () => setEditPass(false);
    const handleEditPass = () => setEditPass(true);

    const buttonHover = {
        whileHover : { backgroundColor : "var(--color-2-p)" },
        transition : { duration : 0.2 }
    }

    const toggleHover = {
        animate : {scale:1},
        initial : {scale:0.5},
        whileHover : { backgroundColor : "var(--color-2-p)" },
        transition : { backgroundColor : {duration : 0.2} }
    }

    return(
        <motion.div initial={{scale:1.1,opacity:0.5}} animate={{scale:1,opacity:1}} exit={{opacity:0}} transition={{type:"tween"}} className="user-base">
            <motion.header initial={{height:105}} animate={{height:250}} exit={{height:0}} transition={{type:"tween",ease:"easeInOut",duration:0.6}} className="user-bg" style={{"backgroundImage":`url(${bg})`}}></motion.header>
            {loading ?
            <div style={{minHeight : '100vh'}} className="d-flex justify-content-center p-5">
                <span className="profile-loader"/>
            </div>
            :
            <div className="container-lg">
                <div className="row">
                    <section 
                        className="col-md-4 d-flex flex-column align-items-center"
                        style={{"position":"relative","bottom":"135px"}}>
                        <UserCard data={data}/>
                        <button className="btn-toggle w-75 mt-3 py-3 px-5" style={progres} disabled>Print Certificate</button>       
                        <motion.button {...buttonHover} className="btn-toggle w-75 mt-3 py-3 px-5" style={editProfile ? {"color":"var(--color-1-s)"} : {}}  onClick={()=>toggleEditProfile()}>Edit Profile</motion.button>
                        <motion.button {...buttonHover} className="btn-toggle w-75 mt-3 py-3 px-5" onClick={()=>handleEditPass()}>Change Password</motion.button>
                        <UserChangePass handleClosePass={handleClosePass} editPass={editPass}/>
                        <hr className="w-75 my-3"></hr>
                        <button className="btn-logout w-75 py-3 px-5 mb-0" onClick={()=>{logout()}}>Log out</button>
                    </section>
                    <section className="col-md-8 p-3">
                        <div className="d-flex justify-content-around my-3">
                            <motion.button {...toggleHover} className="btn-toggle p-2" onClick={()=>nav("")}>Profile</motion.button>
                            <motion.button {...toggleHover} transition={{scale:{delay:0.1}}} className="btn-toggle p-2" onClick={()=>nav("group")}>Group</motion.button>
                            <motion.button {...toggleHover} transition={{scale:{delay:0.2}}} className="btn-toggle p-2" onClick={()=>nav("grade")}>Grade</motion.button>
                        </div>
                        <hr className="my-4"></hr>
                            <Outlet context={[editProfile,toggleEditProfile,data]}/>
                    </section>
                </div>
            </div>
            }
        </motion.div>
    );
}

export default User;