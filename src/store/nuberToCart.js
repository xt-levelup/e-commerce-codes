// -----------------------------------------------------------
// ------SỬ DỤNG createSlice ĐỂ TẠO REDUCER TRONG REDUX-------
// -----------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const initialNumber = { number: 1 };

const numberToCartSlice = createSlice({
    name: "numberToCart",
    initialState: initialNumber,
    reducers: {
        increment(state) {
            state.number++;
        },
        decrement(state) {
            if (state.number > 0) {
                state.number--;
            }
        },
    },
});

export const numberToCartActions = numberToCartSlice.actions;
export default numberToCartSlice.reducer;
