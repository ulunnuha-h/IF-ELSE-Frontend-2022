import React from "react";

const Loading = () => {

    const loadStyle = {
        zIndex : '10',
        backgroundColor : 'var(--color-3)',
        top:'0'
    }

    return(
        <div className='w-100 h-100 d-flex position-absolute justify-content-center align-items-center' style={loadStyle}>
            <span className="h3">Loading</span>
        </div>
    );
}

export default Loading;