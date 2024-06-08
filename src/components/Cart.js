
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CategoryItemsList from "./CategoryItemsList";
import { useState, useEffect } from "react";
import CartItemsDisplay from "./CartItemsDisplay";

const Cart = () => {
    const [subTotal, setSubTotal] = useState(0);
    const cartItems = useSelector((store) => store.cart.items || []);
   
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    useEffect(() => {
        const calculateCartPrice = () => {
            const total = cartItems.reduce((acc, curr) => {
                return acc + (curr?.card?.info?.price || curr?.card?.info?.defaultPrice || 0);
            }, 0);

            setSubTotal(total);
        }

        calculateCartPrice();
    }, [cartItems]);

    if (cartItems.length === 0) {
        return <h1 className="text-center m-5 p-5">Your Cart is Empty!!</h1>;
    }

    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 m-2 bg-red-600 text-white rounded-lg flex justify-left text-xs" onClick={handleClearCart}>Clear Cart</button>
                <CartItemsDisplay cartItemsData = {cartItems}></CartItemsDisplay>
            </div>
            <hr className="border-spacing-5"></hr>
            <div>
                <div className="font-bold text-xl">
                    <h3>SubTotal = ₹{subTotal / 100}</h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;
