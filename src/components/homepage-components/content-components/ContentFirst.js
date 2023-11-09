// -----------------------------------------------------------------
// -------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH--------
// -----------------------------------------------------------------

import { useNavigate } from "react-router-dom";
import styles from "./ContentFirst.module.css";
import image1 from "../../../images/product_1.png";
import image2 from "../../../images/product_2.png";

const ContentFirst = () => {
    const navigate = useNavigate();
    const toShop = () => {
        navigate("/shop");
    };
    return (
        <div className={styles.contain}>
            <div className={styles.image}>
                <img src={image1} onClick={toShop} />
            </div>
            <div className={styles.image}>
                <img src={image2} onClick={toShop} />
            </div>
        </div>
    );
};

export default ContentFirst;
