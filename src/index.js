// ---------------------------------------------------------------
// ---SỬ DỤNG DỮ LIỆU CONTEXT API VÀ REDUX Ở COMPONENT CAO NHẤT---
// -------ĐỂ TRUYỀN DỮ LIỆU CHO TẤT CẢ CÁC COMPONENT CON----------
// ---------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { ShopContext } from "./context/ContextApi";
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ShopContext>
            <Provider store={store}>
                <App />
            </Provider>
        </ShopContext>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
