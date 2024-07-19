import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestMenu = ()=>{
    const {resId} = useParams();
    const restInfo = useRestaurantMenu(resId);
    
    if (restInfo==0) return <Shimmer />;
    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2].card.card.info;
    const {itemCards} = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

    const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (c)=>
            c.card?.card?.["@type"] =="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <h3 className="font-bold my-5 text-lg">{cuisines.join(",")} - {costForTwoMessage}</h3>
            {categories.map((category) => <RestaurantCategory 
             key={category?.card?.card?.title} 
             data={category.card.card}
             />)}
        </div>
    )
}
export default RestMenu;