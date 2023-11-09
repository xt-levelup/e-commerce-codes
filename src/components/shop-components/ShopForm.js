// ---------------------------------------------------------
// -----SỬ DỤNG Form ĐỂ TRUYỀN DỮ LIỆU FORM QUA ROUTER------
// ---------------------------------------------------------

import { Form } from "react-router-dom";
import styles from "./ProductList.module.css";

const ShopForm = () => {
    return (
        <div>
            <Form className={styles.form}>
                <input type="text" placeholder="   Enter search here!" />
                <select>
                    <option>Default sorting</option>
                </select>
            </Form>
        </div>
    );
};

export default ShopForm;
