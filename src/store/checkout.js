// -----------------------------------------------------------
// ------SỬ DỤNG createSlice ĐỂ TẠO REDUCER TRONG REDUX-------
// -----------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const initialCheckoutItems = { checkoutItems: [] };

const checkoutItemsSlice = createSlice({
    name: "checkoutItems",
    initialState: initialCheckoutItems,
    reducers: {
        setCheckoutItems(state, action) {
            state.checkoutItems = action.payload;
        },
    },
});

export const checkoutItemsActions = checkoutItemsSlice.actions;
export default checkoutItemsSlice.reducer;
