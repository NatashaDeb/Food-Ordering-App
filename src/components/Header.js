import { LOGO_IMG } from "../utils/constants";

const Header = () => {
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
                </ul>
            </div>
        </div>
    );
};

export default Header;