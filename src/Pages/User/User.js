import React, { useContext } from "react";
import { Navigate, Outlet} from "react-router-dom";
import UserCard from "../../Components/UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import './User.css';
import { Auth } from "../../Config/Auth";
import { motion, AnimatePresence } from "framer-motion";
import bg from "../../Assets/user-bg.jpg";


const User = () => {
    const nav = useNavigate();
    const auth = useContext(Auth);

    if(auth.isLogged())
    return(
        <AnimatePresence>
        <motion.div initial={{scale:1.1,opacity:0}} animate={{scale:1,opacity:1}} exit={{opacity:0}} transition={{type:"tween"}} className="user-base">
            <header className="user-bg" style={{"height":"250px","backgroundImage":`url(${bg})`}}></header>
            <div className="container-lg">
                <div className="row">
                    <section 
                        className="col-md-4 d-flex flex-column align-items-center"
                        style={{"position":"relative","bottom":"135px"}}>
                        <UserCard/>
                        <button className="btn-toggle w-75 mt-3 py-3 px-5 disabled" disabled>Print Certificate</button>       
                        <button className="btn-toggle w-75 mt-3 py-3 px-5">Edit Profile</button>
                        <button className="btn-toggle w-75 mt-3 py-3 px-5">Change Password</button>
                        <hr className="w-75 my-3"></hr>
                        <button className="btn-logout w-75 py-3 px-5" onClick={()=>{auth.logout()}}>Log out</button>
                    </section>
                    <section className="col-md-8 p-3">
                        <div className="d-flex justify-content-around my-3">
                            <button className="btn-toggle p-2" onClick={()=>nav("")}>Profile</button>
                            <button className="btn-toggle p-2" onClick={()=>nav("group")}>Group</button>
                            <button className="btn-toggle p-2" onClick={()=>nav("grade")}>Grade</button>
                        </div>
                        <hr className="my-4"></hr>
                            <Outlet/>
                    </section>
                </div>
            </div>
        </motion.div>
        </AnimatePresence>
    );
    else{
        return <Navigate to='/login'/>
    }
}

export default User;