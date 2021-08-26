// import React from "react";

function DetailRepo({details, loading}){
    if (loading) {
        return (
            <h2 className="loader"> Loading... </h2>
        )
    }

    return(
        <div className="head-1">
            <div className='details-row'>
                <label className="label">Name</label>
                <span className="value">: {details.name}</span>
            </div>
            <div className='details-row'>
                <label className="label">Language </label>
                <span className="value-1">: {details.language}</span>
            </div>
        </div>
    );
}

export default DetailRepo;


