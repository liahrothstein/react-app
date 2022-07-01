import React from "react";

const Menu = function (){
    return(
        <div className="menu">
            <a href="#" className="home">Home</a>
            <a href="#" className="recipes">Recipes</a>
            <a href="#" className="photoGalleries">Photo Galleries</a>
            <a href="#" className="videos">Videos</a>
            <a href="#" className="allCategories">All Categories</a>
            <form action="" className="search">
                <input type="text" placeholder="Find a recipe" />
                <input type="submit" value="&#128269;" />
            </form>
        </div>
    )
}

export default Menu;