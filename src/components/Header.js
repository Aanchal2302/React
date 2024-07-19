import { LOGO_URL } from "../../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import userContext from "../../utils/userContext";
import { useSelector } from "react-redux";

const Heading = () =>{
    const [btnNameReact, setbtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(userContext);
    console.log(loggedInUser)

    const cartItems = useSelector((store) => (store.cart.items));
    console.log(cartItems)

    return (
    <div className = "flex justify-between shadow-lg px-0 mb-0">
        <div className= "logo-container">
            <img className="w-28 p-4 m-4" src = {LOGO_URL}></img>
        </div>
        <div className = "flex items-center">
            <ul className="flex p-4 m-4">
                <li className="p-4"><Link to="/">Home</Link></li>
                <li className="p-4"><Link to="/about">About Us </Link></li>
                <li className="p-4"><Link to="/contact">Contact Us</Link></li>
                <li className="p-4"><Link to="/grocery">Grocery</Link></li>
                <li className="p-4"><Link to = "cart">Cart <b className="text-red-600">({cartItems.length})</b></Link></li>
                <button className="p-4" onClick={()=>{
                    btnNameReact == "Login"
                    ? setbtnNameReact("Logout")
                    : setbtnNameReact("Login")
                }}>{btnNameReact}</button>
                <li className="p-4 text-red-500">{ loggedInUser }</li>
                <li className="py-4 px-0">
                    {onlineStatus ? "🟢":"🔴"}
                </li>
                
            </ul>
        </div>   
    </div>)
}
export default Heading;