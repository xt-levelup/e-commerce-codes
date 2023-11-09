import styles from "./ProductListTitle.module.css";

function ProductListTitle() {
    return (
        <div className={styles.contain}>
            <p className={styles.title}>MADE THE HARD WAY</p>
            <p className={styles.description}>TOP TRENDING PRODUCTS</p>
        </div>
    );
}

export default ProductListTitle;
