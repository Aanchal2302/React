import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({data}) =>{
    const [showItems, setshowItems] = useState(false);
    const handleClick = () =>{
        setshowItems(!showItems);
    }
    return (
        <div>
        <div className="mx-auto my-6 w-6/12 bg-gray-50 shadow-lg p-2">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-sm">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span>
        </div>
        
        {showItems && <ItemList items={data.itemCards}/>}
        </div>
        </div>
        
    );
}
export default RestaurantCategory;