import React from "react";
import HeroPage from "./GridContainer1/HeroPage";
import Recipe from "./GridContainer1/Recipe";
import Recipes from "./GridContainer1/Recipes";
import TopMenu from "./GridContainer1/TopMenu";

const GridContainer1 = function (){
    return(
        <div className="gridContainer1">
            <TopMenu/>
            <HeroPage/>
            <Recipes/>
            <Recipe/>
        </div>
    )
}

export default GridContainer1;