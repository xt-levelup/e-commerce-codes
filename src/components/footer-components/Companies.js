import styles from "../Footer.module.css";

const Companies = () => {
    return (
        <div className={styles["components-details"]}>
            <p>COMPANY</p>
            <a href="#">What We Do</a>
            <a href="#">Available Services</a>
            <a href="#">Latest Post</a>
            <a href="#">FAQs</a>
        </div>
    );
};

export default Companies;
