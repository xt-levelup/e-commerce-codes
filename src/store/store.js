// ----------------------------------------------------------------------------
// ---SỬ DỤNG configureStore ĐỂ TẠO MỘT STORE KẾT NỐI CÁC REDUCER VỀ MỘT NƠI---
// ----------------------------------------------------------------------------

import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./popup";
import numberToCartReducer from "./nuberToCart";
import authReducer from "./auth";
import cartReducer from "./cart";
import updateCartReducer from "./updateCart";
import checkoutItemsReducer from "./checkout";

const store = configureStore({
    reducer: {
        popup: popupReducer,
        numberToCart: numberToCartReducer,
        authentication: authReducer,
        addToCart: cartReducer,
        updateCart: updateCartReducer,
        checkoutItems: checkoutItemsReducer,
    },
});

export default store;
