import React from "react";
import Author from "./ErrorAndAuthor/Author";
import Error from "./ErrorAndAuthor/Error";

const ErrorAndAuthor = function (){
    return(
        <div className="errorAndAuthor">
            <Error/>
            <Author/>
        </div>
    )
}

export default ErrorAndAuthor;