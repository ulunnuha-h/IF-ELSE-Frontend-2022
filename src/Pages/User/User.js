import React, { useContext } from "react";
import { Navigate, Outlet} from "react-router-dom";
import UserCard from "../../Components/UserCard/UserCard";
import { useNavigate } from "react-router-dom";
import './User.css';
import { Auth } from "../../Config/Auth";

const User = () => {
    const nav = useNavigate();
    const auth = useContext(Auth);

    if(auth.isLogged())
    return(
        <div>
            <header className="bg-secondary" style={{"height":"120px"}}>This is the header</header>
            <div className="container-lg">
                <div className="row">
                    <section 
                        className="col-md-4 d-flex flex-column align-items-center"
                        style={{"position":"relative","bottom":"80px"}}>
                        <UserCard/>
                        <button className="btn btn-toggle w-75 mt-5 py-3 px-5">Edit Profile</button>
                        <button className="btn btn-toggle w-75 mt-3 py-3 px-5">Print Certificate</button>
                        <button className="btn btn-toggle w-75 mt-3 py-3 px-5" onClick={()=>{auth.logout()}}>Log out</button>
                    </section>
                    <section className="col-md-8 p-3">
                        <div className="d-flex justify-content-around my-3">
                            <button className="btn-toggle p-2" onClick={()=>nav("")}>Profile</button>
                            <button className="btn-toggle p-2" onClick={()=>nav("group")}>Group</button>
                            <button className="btn-toggle p-2" onClick={()=>nav("grade")}>Grade</button>
                        </div>
                            <Outlet/>
                    </section>
                </div>
            </div>
        </div>
    );
    else{
        return <Navigate to='/login'/>
    }
}

export default User;