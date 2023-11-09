// ------------------------------------------------------------------------------------
// --------------SỬ DỤNG useEffect ĐỂ THEO DÕI CÁC ĐỐI TƯỢNG PHỤ THUỘC-----------------
// ------------SỬ DỤNG useDispatch ĐỂ CẬP NHẬT GIÁ TRỊ STATE TỪ REDUX------------------
// ------------SỬ DỤNG useState THEO DÕI TRẠNG THÁI CỦA MỘT ĐỐI TƯỢNG------------------
// -----SỬ DỤNG createPortal ĐỂ DI CHUYỂN PHẦN TỬ CON ĐẾN VỊ TRÍ NGOÀI PHẠM VI CHA-----
// ------------------------------------------------------------------------------------

import Banner from "../components/homepage-components/Banner";
import Content from "../components/homepage-components/Content";
import ProductList from "../components/homepage-components/ProductList";
import Others from "../components/homepage-components/Others";
import SupportPage from "./SupportPage";
import { updateCartActions } from "../store/updateCart";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./SupportPage.module.css";

const HomePage = () => {
    const [display, setDisplay] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(updateCartActions.UPDATE_CURRENT_USER_CART([]));
    }, []);

    const displayMessageHandle = () => {
        setDisplay(!display);
    };
    return (
        <div>
            <Banner />
            <Content />
            <ProductList />
            <Others />
            {display && createPortal(<SupportPage />, document.body)}
            {createPortal(
                <button
                    type="button"
                    className={styles["portal-button"]}
                    onClick={displayMessageHandle}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="36"
                        height="36"
                        fill="#000000"
                        viewBox="0 0 256 256"
                    >
                        <path d="M184.49,120.49l-32,32a12,12,0,0,1-17,0L112,129,88.49,152.49a12,12,0,0,1-17-17l32-32a12,12,0,0,1,17,0L144,127l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.05a12,12,0,0,1,1,9.82l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z"></path>
                    </svg>
                </button>,
                document.body
            )}
        </div>
    );
};

export default HomePage;
