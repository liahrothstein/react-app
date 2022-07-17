import React from "react";
import Directions from "./Directions/Directions";
import Ingredients from "./Ingredients/Ingredients";
import Instruction from "./Instruction/Instruction";

const MainText = function (){
    return(
        <div className="mainText">
            <Ingredients/>
            <Directions/>
            <Instruction/>
        </div>
    )
}

export default MainText;