import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({ //createSlice returns an object of cart slice
        name: "cart",
        initialState: {
            items: []
        },

        reducers:{
            addItem: (state, action) => {
                //mutuating the state
                state.items.push(action.payload);
            },

            removeItem: (state) => {
                state.items.pop();
            },
            
            clearCart: (state) => {
                state.items.length = 0; 
            }
        }
    }
);

//carSlice object consists of actions and reducers

//taking out actions individually and exporting
export const {addItem, removeItem, clearCart} = cartSlice.actions;
//exporting reducer by default
export default cartSlice.reducer;
