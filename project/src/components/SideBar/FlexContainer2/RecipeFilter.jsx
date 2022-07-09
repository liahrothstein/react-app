import React from "react";

const RecipeFilter = function (){
    return(
        <div className="recipeFilter">
            <div className="header">Recipe</div>
                    <div className="filter">
                        <form action="">
                            <input type="radio" name="filter" id="easy" />
                            <label htmlFor="easy">Easy</label>
                            <input type="radio" name="filter" id="middle" />
                            <label htmlFor="middle">Middle</label>
                            <input type="radio" name="filter" id="long" />
                            <label htmlFor="long">Long</label>
                        </form>
                    </div>
                    <div className="recipes">
                        <div className="recipe1">
                            <div className="image"></div>
                            <div className="main">
                                <div className="by">by
                                    <div className="name">Smuckersreg Toppings</div>
                                </div>
                                <div className="text">
                                    Thanks for the recipe<br />
                                    lorem ipsum bla bla bla<br />  
                                    Thanks for the recipe lore
                                </div>
                            </div>
                        </div>
                        <div className="recipe2">
                            <div className="image"></div>
                            <div className="main">
                                <div className="by">by
                                    <div className="name">Smuckersreg Toppings</div>
                                </div>
                                <div className="text">
                                    Thanks for the recipe<br />
                                    lorem nks for the recipe<br />
                                </div>
                            </div>
                        </div>
                        <div className="recipe3">
                            <div className="image"></div>
                            <div className="main">
                                <div className="by">by
                                    <div className="name">Smuckersreg Toppings</div>
                                </div>
                                <div className="text">
                                    Thanks for the recipe<br />
                                    lorem nks for the recipe<br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button">
                        <button>View more</button>
                    </div>
        </div>
    )
}

export default RecipeFilter;