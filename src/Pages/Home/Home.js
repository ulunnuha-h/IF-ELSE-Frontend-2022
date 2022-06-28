import React from "react";
import FriendCard from "../../Components/FriendCard/FriendCard";

const Home = () => {
    return(
        <>
            <h1>This is Home</h1>
            <FriendCard/>
            <div style={{"height":"200vh"}}>Hello</div>
        </>
    );
}

export default Home;