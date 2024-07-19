import {RestaurantCard, withVegLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MAIN_URL } from "../../utils/constants";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {

    const [ListofRest, setListofRest] = useState([]);
    const [filteredRest, setfilteredRest] = useState([]);
    const [searchText, setsearchText] = useState("");
    const RestaurantCardVeg = withVegLabel(RestaurantCard);

    useEffect(()=>{ 
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            MAIN_URL
           );
        const json_data = await data.json();
        setListofRest(json_data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRest(json_data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus==false){
        return <h1>You'r offline</h1>
    }

    if (ListofRest==0){
        return <Shimmer />
    }
    

    return (
        <div className="body">
            <div className="flex">
                <div className="search m-2 p-2">
                <input type="text" className="border border-black" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value)
                }} />
                <button className="px-5 py-1 bg-gray-200 m-4 rounded-md" onClick={()=>{
                    const filterrest = ListofRest.filter(
                        (res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    )
                    setfilteredRest(filterrest);
                }}>Search</button>
                </div>
                <div className="m-2 p-2">
                <button className="px-5 py-1 bg-gray-200 m-4 rounded-md" onClick={()=>
                {
                    const filterlist = ListofRest.filter(
                        (res)=>(res.info.avgRating > 4.3));
                    setfilteredRest(filterlist);
                }

            }>Top Data</button>

                </div>
                </div>
            <div className="flex flex-wrap  w-{250px} h-{300px}">
                {
                    filteredRest.map(restaurant => (
                        <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                            {
                                restaurant.info.veg ? <RestaurantCardVeg restData={restaurant}/> :<RestaurantCard  restData={restaurant} />
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;