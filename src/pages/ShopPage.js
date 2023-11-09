// ---------------------------------------------------------------
// -----SỬ DỤNG Outlet TRONG ROUTER ĐỂ HIỂN THỊ PHẦN TỬ CON-------
// ---------------------------------------------------------------

import { Outlet } from "react-router-dom";
import ShopForm from "../components/shop-components/ShopForm";
import NavBarShop from "../components/shop-components/NavBarShopProduct";
import styles from "../components/shop-components/ProductList.module.css";

const ShopPage = () => {
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
                <div>
                    <ShopForm />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ShopPage;
