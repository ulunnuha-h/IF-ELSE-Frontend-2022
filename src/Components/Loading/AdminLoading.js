import React from "react";

const AdminLoading = () => {

    const loadStyle = {
        zIndex : '10',
        height : '100vh'
    }

    return(
        <div className='w-100 d-flex position-absolute justify-content-center align-items-center bg-dark text-white' style={loadStyle}>
            <span className="h3">Loading</span>
        </div>
    );
}

export default AdminLoading;