// --------------------------------------------------------------------
// --------SỬ DỤNG useRouteLoaderData ĐỂ LOAD DỮ LIỆU TỪ ROUTER--------
// ---------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------
// --------------------------------------------------------------------

import { useRouteLoaderData, useNavigate } from "react-router-dom";
import styles from "./ShopProducts.module.css";

const ShopProducts = () => {
    const items = useRouteLoaderData("items");
    const navigate = useNavigate();

    const clickHandle = (event) => {
        console.log("event.target.src", event.target.src);
        for (let i = 0; i < items.items.length; i++) {
            if (event.target.src === items.items[i].img1) {
                navigate("/detail/" + items.items[i]._id.$oid);
                return;
            }
        }
    };

    return (
        <div className={styles.images}>
            {items.items.map((item, index) => (
                <div className={styles.details} key={index}>
                    <img src={item.img1} onClick={clickHandle} />
                    <h6>{item.name}</h6>
                    <p>{Number(item.price).toLocaleString("it-IT")} VND</p>
                </div>
            ))}
        </div>
    );
};

export default ShopProducts;
