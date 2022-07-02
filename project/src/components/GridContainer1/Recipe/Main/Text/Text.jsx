import React from "react";
import Header from "./Header/Header";
import MainText from "./MainText/MainText";

const Text = function (){
    return(
        <div className="text">
            <Header/>
            <MainText/>
        </div>
    )
}

export default Text;