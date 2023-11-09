// -----------------------------------------------------------
// ------SỬ DỤNG createSlice ĐỂ TẠO REDUCER TRONG REDUX-------
// -----------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const initialCart = { cartOject: {} };

const cartSlice = createSlice({
    name: "cart-slice",
    initialState: initialCart,
    reducers: {
        ADD_CART(state, action) {
            state.cartOject = action.payload;
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
