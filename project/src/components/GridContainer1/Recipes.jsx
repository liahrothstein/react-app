import React from "react";
import Recipe1 from "./Recipes/Recipe1";
import Recipe2 from "./Recipes/Recipe2";
import Recipe3 from "./Recipes/Recipe3";

const Recipes = function (){
    return(
        <div className="recipes">
            <Recipe1/>
            <Recipe2/>
            <Recipe3/>
        </div>
    )
}

export default Recipes;