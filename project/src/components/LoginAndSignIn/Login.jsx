import React from "react";

const Login = function (){
    return(
        <div className="login">
            <div className="header">Login</div>
                <div className="loginFor">Login for LEMON</div>
                <form action="">
                    <input type="text" name="" placeholder="email or login" />
                    <input type="password" name="" placeholder="password" />
                    <div className="formContainer">
                        <div className="checkbox">
                            <input type="checkbox" name="" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember Me</label>
                        </div>
                        <a href="#">Forgot your password ?</a>
                    </div>
                </form>
                <div className="buttons">
                    <button>LOGIN</button>
                    <a href="#">Don’t have an accont? Sign in</a>
                </div>
        </div>
    )
}

export default Login;