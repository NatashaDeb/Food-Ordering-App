import { useState } from "react";
import { LOGO_IMG } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store)=> store.cart.items)
   console.log(cartItems);

    return(
        <div className="flex justify-between shadow-lg">
            <div src ="logo-container">
            <img className="w-28" src={LOGO_IMG}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4">Online Status: {onlineStatus? "✅" : "🔴"}</li>
                    <li className="px-4"><Link to={"/"}>Home</Link></li>
                    <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
                    <li className="px-4"><Link to={"/about"}>About us</Link></li>
                    <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
                    <li className="px-4 font-bold"> <Link to={"/cart"}>cart- ({cartItems.length} items)</Link></li>
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