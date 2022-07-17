import React from "react";

const RecipeBlog = function (){
    return(
        <div className="recipeBlog">
            <div className="header">Chi-Chi or Chichi</div>
            <div className="blogerInfo">
                <div className="photo"></div>
                <div className="text">
                    <div className="recipeBy">Recipe by</div>
                    <div className="name">Smuckersreg Toppings</div>
                    <div className="info">🕘15mins | 💬12👀37</div>
                </div>
            </div>
            <div className="food"></div>
        </div>
    )
}

export default RecipeBlog;