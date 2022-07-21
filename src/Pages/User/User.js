import React, { useContext, useState } from "react";
import { Navigate, Outlet} from "react-router-dom";
import UserCard from "../../Components/UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import './User.css';
import { Auth } from "../../Config/Auth";
import { motion } from "framer-motion";
import bg from "../../Assets/user-bg.jpg";
import UserChangePass from "./User-changePass";


const User = () => {
    const nav = useNavigate();
    const auth = useContext(Auth);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    if(auth.isLogged())
    return(
        <motion.div initial={{scale:1.1,opacity:0.5}} animate={{scale:1,opacity:1}} exit={{opacity:0}} transition={{type:"tween"}} className="user-base">
            <motion.header initial={{height:105}} animate={{height:250}} exit={{height:0}} transition={{type:"tween",ease:"easeInOut",duration:0.6}} className="user-bg" style={{"backgroundImage":`url(${bg})`}}></motion.header>
            <div className="container-lg">
                <div className="row">
                    <section 
                        className="col-md-4 d-flex flex-column align-items-center"
                        style={{"position":"relative","bottom":"135px"}}>
                        <UserCard/>
                        <button className="btn-toggle w-75 mt-3 py-3 px-5 disabled" disabled>Print Certificate</button>       
                        <motion.button {...buttonHover} className="btn-toggle w-75 mt-3 py-3 px-5">Edit Profile</motion.button>
                        <motion.button {...buttonHover} className="btn-toggle w-75 mt-3 py-3 px-5" onClick={()=>handleShow()}>Change Password</motion.button>
                        <UserChangePass handleClose={handleClose} show={show}/>
                        <hr className="w-75 my-3"></hr>
                        <button className="btn-logout w-75 py-3 px-5 mb-0" onClick={()=>{auth.logout()}}>Log out</button>
                    </section>
                    <section className="col-md-8 p-3">
                        <div className="d-flex justify-content-around my-3">
                            <motion.button {...toggleHover} className="btn-toggle p-2" onClick={()=>nav("")}>Profile</motion.button>
                            <motion.button {...toggleHover} transition={{scale:{delay:0.1}}} className="btn-toggle p-2" onClick={()=>nav("group")}>Group</motion.button>
                            <motion.button {...toggleHover} transition={{scale:{delay:0.2}}} className="btn-toggle p-2" onClick={()=>nav("grade")}>Grade</motion.button>
                        </div>
                        <hr className="my-4"></hr>
                            <Outlet/>
                    </section>
                </div>
            </div>
        </motion.div>
    );
    else{
        return <Navigate to='/login'/>
    }
}

export default User;