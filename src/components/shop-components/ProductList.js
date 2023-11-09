// ---------------------------------------------------------------
// -----SỬ DỤNG Outlet TRONG ROUTER ĐỂ HIỂN THỊ PHẦN TỬ CON-------
// ---------------------------------------------------------------

import { Outlet } from "react-router-dom";
import styles from "./ProductList.module.css";
import NavBarShop from "./NavBarShopProduct";

const ProductList = ({ items }) => {
    return (
        <div>
            <div className={styles.banner}>
                <h2>SHOP</h2>
                <h6>SHOP</h6>
            </div>
            <div className={styles.content}>
                <div className={styles.navbar}>
                    <NavBarShop />
                </div>
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default ProductList;
