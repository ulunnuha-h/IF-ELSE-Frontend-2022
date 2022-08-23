import React from "react";

const LoadingSpinner = () => {
    return(
        <div className="spinner-border-sm spinner-border text-light text-center m-auto" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default LoadingSpinner;