import RestaurantCard from "./RestaurantCard";
import restlist from "../../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [ListofRest, setListofRest] = useState([]);
    const [filteredRest, setfilteredRest] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(()=>{ 
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9121181&lng=77.6445548&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json_data = await data.json();
           
        console.log(json_data.data);
        setListofRest(json_data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRest(json_data?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (ListofRest==0){
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter">
                <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value)
                }} />
                <button onClick={()=>{
                    const filterrest = ListofRest.filter(
                        (res)=>(res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    )
                    setfilteredRest(filterrest);
                }}>Search</button>
                </div>
                <button className="btn-filter" onClick={()=>
                {
                    const filterlist = ListofRest.filter(
                        (res)=>(res.info.avgRating > 4.3));
                    setListofRest(filterlist);
                }

            }>Top Data</button></div>
            <div className="res-container">
                {
                    filteredRest.map(restaurant => (
                        <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}
export default Body;