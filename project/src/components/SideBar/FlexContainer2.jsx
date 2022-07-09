import React from "react";
import Calendar from "./FlexContainer2/Calendar";
import RecipeFilter from "./FlexContainer2/RecipeFilter";
import Tags from "./FlexContainer2/Tags";

const FlexContainer2 = function (){
    return(
        <div className="flexContainer2">
            <RecipeFilter/>
            <Tags/>
            <Calendar/>
        </div>
    )
}

export default FlexContainer2;