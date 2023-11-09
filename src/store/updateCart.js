// -----------------------------------------------------------
// ------SỬ DỤNG createSlice ĐỂ TẠO REDUCER TRONG REDUX-------
// -----------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const initialCartUpdate = {
    currentUserCart: [],
};

const updateCartSlice = createSlice({
    name: "updateCart",
    initialState: initialCartUpdate,
    reducers: {
        UPDATE_CURRENT_USER_CART(state, action) {
            state.currentUserCart = action.payload;
        },

        INCREMENT(state, action) {
            state.currentUserCart[action.payload].number++;
        },
        DECREMENT(state, action) {
            state.currentUserCart[action.payload].number--;
        },
        DELETE_CART(state, action) {
            state.currentUserCart.splice(action.payload, 1);
        },
    },
});

export const updateCartActions = updateCartSlice.actions;
export default updateCartSlice.reducer;
