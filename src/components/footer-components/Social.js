import styles from "../Footer.module.css";

const Social = () => {
    return (
        <div className={styles["components-details"]}>
            <p>SOCIAL MEDIA</p>
            <a href="#">Twiter</a>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Pinterest</a>
        </div>
    );
};

export default Social;
