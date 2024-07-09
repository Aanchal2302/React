import { CDN_URL } from "../../utils/constants";
const RestaurantCard = (props) => {
    const {restData} = props
    const {cuisines, name, avgRating, sla, cloudinaryImageId} = restData?.info;
    return (
        <div className="res-card" >
            <img className="rest-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h4>{name}</h4>
            <h5>{cuisines.join(" , ")}</h5>
            <h6>{avgRating} | {restData.info.costForTwo} </h6>
            <h6>{sla.deliveryTime} minutes</h6>
        </div>
    )
}
export default RestaurantCard;