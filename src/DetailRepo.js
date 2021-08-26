// import React from "react";

function DetailRepo({details, loading}){
    if (loading) {
        return (
            <h2 className="loader"> Loading... </h2>
        )
    }

    return(
        <div className="repo-details-container">
            <div className='details-row'>
                <label className="label">Name : </label>
                <span className="value">{details.name}</span>
            </div>
            <div className='details-row'>
                <label className="label">Language : </label>
                <span className="value">{details.language}</span>
            </div>
        </div>
    );
}

export default DetailRepo;


