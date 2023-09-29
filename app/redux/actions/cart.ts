import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: any, action) => {
            state.value = [...state.value, action.payload];
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.value.findIndex(
                (item: any) => item.id === action.payload.id
            );

            let newCart = [...state.value];

            if (itemIndex >= 0) {
                newCart.splice(itemIndex, 1);
            } else {
                console.warn(
                    `can't remove ${action.payload.id}, because it's not in the cart`
                );
            }

            state.value = newCart;
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const cartTotal = (state: any) =>
    state.cart.value.reduce((total: any, item: any) => total + item.price, 0);

export default cartSlice.reducer;