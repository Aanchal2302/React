import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/constants";
import { addItem } from "../../utils/cartSlice";
const ItemList = ({items}) =>{

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));

    }
    return (
        <div>
           <ul>
            {items.map(item => (
            <div key={item.card.info.id} className="p-2 m-2 border border-gray-200 border-b-2 text-left flex justify-between">
                
                <div className="w-9/12">
                <div className="py-2">
                <span>{item.card.info.name} - ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100 }</span>
                
                </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
            <div className="w-3/12 p-4">
            <img src={CDN_URL + item.card.info.imageId}></img>
            <div>
            <button className=" bg-white border border-gray-300 shadow-lg absolute mx-14 px-1 text-center rounded-lg"
            onClick={() => handleAddItem(item)}>Add + </button>
            </div>
            </div>
            </div>
            
            ))}
            </ul>
        </div>
    );
}
export default ItemList;