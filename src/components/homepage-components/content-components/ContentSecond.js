// -----------------------------------------------------------------
// -------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH--------
// -----------------------------------------------------------------

import { useNavigate } from "react-router-dom";
import styles from "./ContentSecond.module.css";
import image1 from "../../../images/product_3.png";
import image2 from "../../../images/product_4.png";
import image3 from "../../../images/product_5.png";

const ContentSecond = () => {
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
            <div className={styles.image}>
                <img src={image3} onClick={toShop} />
            </div>
        </div>
    );
};

export default ContentSecond;
