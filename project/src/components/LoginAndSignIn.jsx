import React from "react";
import Login from "./LoginAndSignIn/Login";
import SignIn from "./LoginAndSignIn/SignIn";

const LoginAndSignIn = function (){
    return(
        <div className="loginAndSignIn">
            <Login/>
            <SignIn/>
        </div>
    )
}

export default LoginAndSignIn;