import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");

    return(
        <div className="header">
            <div src ="logo-container">
            <img className="logo" src={LOGO_IMG}></img>
            </div>
            <div className="nav-bar">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                        <button className="login-btn" onClick={
                            ()=>{
                                loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                            }
                        }>{loginBtn}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;