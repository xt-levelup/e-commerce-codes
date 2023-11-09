// ------------------------------------------------------------------
// --------SỬ DỤNG Link THAY THẾ a TRONG ROUTER THUẬN TIỆN HƠN-------
// ------------------------------------------------------------------

import { Link } from "react-router-dom";
import styles from "./Banner.module.css";

function BannerDetails() {
    return (
        <div className={styles["contain-details"]}>
            <p className={styles.title}>NEW INSPIRATION 2020</p>
            <p className={styles.description}>20% OFF ON NEW SEASON</p>
            <Link to="/shop">Browse collections</Link>
        </div>
    );
}

export default BannerDetails;
