import React from "react";

const SignIn = function (){
    return(
        <div className="signIn">
            <div className="header">Sign in</div>
                <div className="signInFor">Sign in for LEMON</div>
                <form action="">
                    <input type="email" name="" placeholder="email" />
                    <input type="text" name="" placeholder="user name" />
                    <input type="password" name="" placeholder="password" />
                    <input type="password" name="" placeholder="reapet password" />
                </form>
                <div className="buttonAndLinks">
                    <button>SIGN UP</button>
                    <div className="terms">
                        By joining LEMON, you agree to our.<br />
                        <a href="#">Terms of Service</a>
                    </div>
                    <a href="#">LOGIN</a>
                </div>
        </div>
    )
}

export default SignIn;