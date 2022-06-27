import React from "react";
import UserCard from "../../Components/UserCard/UserCard";

const Home = () => {
    return(
        <>
            <h1>This is Home</h1>
            <UserCard/>
            <div style={{"height":"200vh"}}>Hello</div>
        </>
    );
}

export default Home;