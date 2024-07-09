import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";

const Heading = () =>{
    const [btnNameReact, setbtnNameReact] = useState("Login")
    return (
    <div className = "header">
        <div className= "logo-container">
            <img className="logo" src = {LOGO_URL}></img>
        </div>
        <div className = "nav_items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="btn" onClick={()=>{
                    btnNameReact == "Login"
                    ? setbtnNameReact("Logout")
                    : setbtnNameReact("Login")
                }}>{btnNameReact}</button>
            </ul>
        </div>   
    </div>)
}
export default Heading;