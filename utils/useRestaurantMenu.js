
import { useState, useEffect } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (restId) =>{
    const [restInfo, setrestInfo] = useState([]);
    useEffect(()=>{ 
        fetchMenu()
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(
            MENU_URL+ restId
        );
        const jsonData = await data.json();
        setrestInfo(jsonData.data);
    };
    return restInfo;
}
export default useRestaurantMenu;