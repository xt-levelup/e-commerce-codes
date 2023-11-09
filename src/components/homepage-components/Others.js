import Other01 from "./other-components/Other01";
import Other02 from "./other-components/Other02";
import Other03 from "./other-components/Other03";
import Other04 from "./other-components/Other04";
import styles from "./Others.module.css";

const Others = () => {
    return (
        <div>
            <div className={styles.contain}>
                <Other01 />
                <Other02 />
                <Other03 />
            </div>
            <div>
                <Other04 />
            </div>
        </div>
    );
};
export default Others;
