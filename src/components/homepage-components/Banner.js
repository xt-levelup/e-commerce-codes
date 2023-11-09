import BannerDetails from "./BannerDetails";
import styles from "./Banner.module.css";
import bannerImage from "../../images/banner1.jpg";

const Banner = () => {
    return (
        <div className={styles.contain}>
            <BannerDetails />
            <div className={styles.image}>
                <img src={bannerImage}></img>
            </div>
        </div>
    );
};

export default Banner;
