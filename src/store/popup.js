// -----------------------------------------------------------
// ------SỬ DỤNG createSlice ĐỂ TẠO REDUCER TRONG REDUX-------
// -----------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const initPopupSlice = { showPopup: false };
const popupSlice = createSlice({
    name: "popup",
    initialState: initPopupSlice,
    reducers: {
        togglePopup(state) {
            state.showPopup = !state.showPopup;
        },
    },
});

export const popupActions = popupSlice.actions;
export default popupSlice.reducer;
