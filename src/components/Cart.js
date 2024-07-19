import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const Dispatch = useDispatch();

    const handleClearCart = () => {
        Dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">
            Cart
            </h1>
            <button className="p-2 m-2 bg-gray-400" onClick={handleClearCart}>Clear Cart</button>
            {cartItems.length==0 && (<h1> Cart is empty. Add Items</h1>)}
            <div class="w-6/12 m-auto">
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;