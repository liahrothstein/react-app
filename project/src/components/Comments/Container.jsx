import React from "react";
import Post1 from "./Container/Post1";
import Post2 from "./Container/Post2";

const Container = function (){
    return(
        <div className="container">
            <div className="header">Comments</div>
            <Post1/>
            <Post2/>
        </div>
    );
}

export default Container;