import styles from "../Footer.module.css";

const Services = () => {
    return (
        <div className={styles["components-details"]}>
            <p>CUSTOMER SERVICES</p>
            <a href="#">Help & Contact Us</a>
            <a href="#">Returns & Refunds</a>
            <a href="#">Online Stores</a>
            <a href="#">Terms & Conditions</a>
        </div>
    );
};

export default Services;
