import { createSlice } from "@reduxjs/toolkit";
import {toast} from 'react-toastify'
const initialState = {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
}

const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            

            const itemIndex = state.cartItems.findIndex( (item) => item.id === action.payload.id)
            console.log(itemIndex, "item index =====");
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info(`Add More ${action.payload.name} to cart`, {
                    position: "bottom-left"
                })
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct)
                toast.success(`Add ${action.payload.name} to cart`, {
                    position: "bottom-left"
                })
            }

           localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
        },

    }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer