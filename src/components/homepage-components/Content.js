import ContentTitle from "./content-components/ContentTitle";
import ContentFirst from "./content-components/ContentFirst";
import ContentSecond from "./content-components/ContentSecond";
import styles from "./Content.module.css";

const Content = () => {
    return (
        <div className={styles.contain}>
            <ContentTitle />
            <ContentFirst />
            <ContentSecond />
        </div>
    );
};
export default Content;
