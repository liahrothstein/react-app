import React from "react";
import Others from "./Others/Others";
import Text from "./Text/Text";

const Header = function (){
    return(
        <div className="header">
            <Text/>
            <Others/>
        </div>
    )
}

export default Header;