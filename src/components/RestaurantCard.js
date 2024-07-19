import { CDN_URL } from "../../utils/constants";
export const RestaurantCard = (props) => {
    const {restData} = props
    const {cuisines, name, avgRating, sla, cloudinaryImageId} = restData?.info;
    return (
        <div className="m-4 p-4 bg-gray-200 w-[250px] h-[350px] rounded-lg" >
            <img className="h-[160px] w-[230px]" src={CDN_URL + cloudinaryImageId}></img>
            <h5 className="font-bold">{name}</h5>
            <p className="text-xs">{cuisines.join(" , ")}</p>
            <h6>{avgRating} | {restData.info.costForTwo} </h6>
            <h6>{sla.deliveryTime} minutes</h6>
        </div>
    )
}
export const withVegLabel = (RestaurantCard) =>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-green-600 text-white m-2 py-1.5 px-2 text-sm rounded-md">veg</label>
                <RestaurantCard {...props} />
            </div>
        
        );
    };
    
}