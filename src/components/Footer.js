import Services from "./footer-components/Services";
import Companies from "./footer-components/Companies";
import Social from "./footer-components/Social";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.contain}>
            <div className={styles.components}>
                <Services />
                <Companies />
                <Social />
            </div>
        </div>
    );
};

export default Footer;
