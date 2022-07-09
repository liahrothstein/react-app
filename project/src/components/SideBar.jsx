import React from "react";
import FlexContainer1 from "./SideBar/FlexContainer1";
import FlexContainer2 from "./SideBar/FlexContainer2";
import FlexContainer3 from "./SideBar/FlexContainer3";

const SideBar = function (){
    return(
        <div className="sideBar">
            <FlexContainer1/>
            <FlexContainer2/>
            <FlexContainer3/>
        </div>
    )
}

export default SideBar;