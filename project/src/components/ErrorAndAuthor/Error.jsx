import React from "react";

const Error = function (){
    return(
        <div className="error">
            <div className="header">404</div>
                <div className="container">
                    <div className="sorry">Sorry</div>
                    <div className="text">WE COULDN’T<br /> FIND THE PAGE</div>
                    <button>Back</button>
                </div>
        </div>
    )
}

export default Error;