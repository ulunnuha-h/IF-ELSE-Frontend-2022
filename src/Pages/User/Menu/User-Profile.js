import React from "react";

const UserProfile = () => {

    const edit = true;

    return(
        <>{edit ?
        <div className="mx-3 my-4 user-profile">
            <h5>Name</h5>
            <section className="mb-3">Hanif Ulunnuha Hidayat</section>
            <h5>NickName</h5>
            <section className="mb-3">Hanif</section>
            <h5>NIM</h5>
            <section className="mb-3">215150200111019</section>
            <h5>Address</h5>
            <section className="mb-3">Sumenep, Jawa Timur</section>
            <h5>ID Line</h5>
            <section className="mb-3">hanifulunnuha</section>
            <h5>Group Name</h5>
            <section className="mb-3">Debian Edu</section>
        </div>:
        <div className="mx-3 my-4 user-profile">
            <h5>NickName</h5>
            <input type="text" placeholder="NickName" className="mb-3"/>
            <h5>Address</h5>
            <input type="text" placeholder="Address" className="mb-3"/>
            <h5>ID Line</h5>
            <input type="text" placeholder="ID Line" className="mb-3"/>
            <h5>About me</h5>
            <textarea style={{"height":"100px","resize":"none"}} placeholder="About me" className="mb-3"/>
            <button className="btn px-5 me-2">Cancel</button>
            <button className="btn btn-info px-5">Save</button>
        </div>
        }
        </>
    );
}

export default UserProfile;