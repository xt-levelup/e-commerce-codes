// -----------------------------------------------------------
// ------SỬ DỤNG createSlice ĐỂ TẠO REDUCER TRONG REDUX-------
// -----------------------------------------------------------

import { createSlice } from "@reduxjs/toolkit";

const initialAuth = { auth: false };

const authSlice = createSlice({
    name: "authRedux",
    initialState: initialAuth,
    reducers: {
        ON_LOGIN(state) {
            state.auth = true;
        },
        ON_LOGOUT(state) {
            state.auth = false;
        },
    },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
