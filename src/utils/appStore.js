import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = () => configureStore({
        reducer: { //this reducer is combination of different small stores
            cart: cartReducer, //each slice has its own reducer
        },
    }
);

export default appStore; 