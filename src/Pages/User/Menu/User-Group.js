import React from "react";
import PendampingCard from "../../../Components/PendampingCard/PendampingCard";
import FriendCard from "../../../Components/FriendCard/FriendCard";

const UserGroup = () => {
    return(
        <div className="mx-3 my-4 d-flex flex-column align-items-center">
            <h3 className="mt-4">Pendamping</h3>
            <PendampingCard/>
            <h3 className="mt-4">Group Members</h3>
            <div className="row row-cols-2 row-cols-sm-3 justify-content-center">
                <FriendCard/>
            </div>
        </div>
    );
}

export default UserGroup;