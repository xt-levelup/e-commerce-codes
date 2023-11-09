// --------------------------------------------------------------------
// ------------SỬ DỤNG Form ĐỂ TRUYỀN DỮ LIỆU FORM QUA ROUTER----------
// --------SỬ DỤNG useEffect ĐỂ THEO DÕI CÁC ĐỐI TƯỢNG PHỤ THUỘC-------
// ---------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------
// ---SỬ DỤNG useRef ĐỂ LẤY THÔNG TIN TỪ ĐỐI TƯỢNG TRONG COMPONENT-----
// ---SỬ DỤNG useContext ĐỂ LẤY VÀ CẬP NHẬT DỮ LIỆU QUA CONTEXT API----
// --------------------------------------------------------------------

import { Form, useNavigate } from "react-router-dom";
import { useContext, useRef, useEffect } from "react";
import { DataContext } from "../../../context/ContextApi";
import styles from "../Others.module.css";

const Other04Form = () => {
    const { updateEmailSubscribe, emailSubscribe } = useContext(DataContext);
    const emailSub = useRef(null);
    const navigate = useNavigate();

    const submitHandler = (event) => {
        event.preventDefault();
        if (emailSub.current.value.includes("@")) {
            updateEmailSubscribe(emailSub.current.value);
            emailSub.current.value = "";
            navigate("/register");
        } else {
            window.alert("Xin vui lòng nhập email hợp lệ!");
        }
    };

    return (
        <Form className={styles["other04-form"]}>
            <input
                ref={emailSub}
                type="email"
                name="subscribe"
                placeHolder=" Enter your email address"
            />
            <button onClick={submitHandler}>Subscribe</button>
        </Form>
    );
};

export default Other04Form;
