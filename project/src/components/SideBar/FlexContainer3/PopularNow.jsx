import React from "react";

const PopularNow = function (){
    return(
        <div className="popularNow">
            <div className="header">Popular Now</div>
                    <div className="main">
                        <div className="mainHeader">Vanilla Frozen Coffee</div>
                        <div className="text">
                            Mix coffee, sugar and creamer.<br />
                            Pour into blender and add ice cubes.<br /> 
                            Blend until smooth.
                        </div>
                        <div className="btnAndMore">
                            <button>GET IT RECIPE</button>
                            <div className="more">🕘6mins | 💬240👀400</div>
                        </div>
                    </div>
        </div>
    )
}

export default PopularNow;