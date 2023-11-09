// --------------------------------------------------------------------
// ------------SỬ DỤNG Form ĐỂ TRUYỀN DỮ LIỆU FORM QUA ROUTER----------
// ---------SỬ DỤNG Link THAY THẾ a CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH--------
// ---------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------
// ---------SỬ DỤNG useSelector ĐỂ LẤY GIÁ TRỊ STATE TỪ REDUX----------
// -----------SỬ DỤNG useContext ĐỂ LẤY DỮ LIỆU TỪ CONTEXT API---------
// ---SỬ DỤNG useRef ĐỂ LẤY THÔNG TIN TỪ ĐỐI TƯỢNG TRONG COMPONENT-----
// --------------------------------------------------------------------

import { Form, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useRef } from "react";
import { DataContext } from "../context/ContextApi";
import styles from "./RegisterPage.module.css";

function RegisterPage() {
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.authentication.auth);
    const { emailSubscribe, updateEmailSubscribe } = useContext(DataContext);
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const phone = useRef();
    const userArr = JSON.parse(localStorage.getItem("userArr")) ?? [];

    const onChangeHandler = (event) => {
        updateEmailSubscribe(event.target.value);
    };

    const validForm = () => {
        let valid = true;
        if (
            !name.current.value ||
            !email.current.value ||
            !password.current.value ||
            !phone.current.value
        ) {
            window.alert("Xin vui lòng điền đầy đủ thông tin");
            valid = false;
            return;
        }
        if (!email.current.value.includes("@")) {
            window.alert("Xin vui lòng điền email hợp lệ!");
            valid = false;
            return;
        }
        for (let i = 0; i < userArr.length; i++) {
            if (userArr[i].email === email.current.value) {
                window.alert("Email này đã được đăng ký! Hãy chọn email khác!");
                valid = false;
                return;
            }
        }
        if (password.current.value.length < 9) {
            window.alert("Mật khẩu phải từ 9 ký tự trở lên!");
            valid = false;
            return;
        }
        if (isNaN(Number(phone.current.value))) {
            window.alert("Số điện thoại là các số!");
            valid = false;
            return;
        }
        if (phone.current.value.length < 9) {
            window.alert("Số điện thoại từ 9 số trở lên!");
            valid = false;
            return;
        }

        return valid;
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (validForm()) {
            userArr.push({
                name: name.current.value,
                email: email.current.value,
                password: password.current.value,
                phone: phone.current.value,
            });
            localStorage.setItem("userArr", JSON.stringify(userArr));
            name.current.value = "";
            email.current.value = "";
            password.current.value = "";
            phone.current.value = "";
            navigate("/login");
        }
    };

    return (
        <div className={styles.contain}>
            {isAuth && (
                <p
                    style={{
                        color: "black",
                        textAlign: "center",
                        padding: "3em 0 2em 0",
                    }}
                >
                    Bạn đang đăng nhập!
                </p>
            )}
            {!isAuth && (
                <div className={styles.content}>
                    <Form>
                        <h2>Sign Up</h2>
                        <input
                            ref={name}
                            type="text"
                            placeholder="   Full Name"
                        />
                        <input
                            ref={email}
                            type="email"
                            placeholder="   Email"
                            value={emailSubscribe}
                            onChange={onChangeHandler}
                        />
                        <input
                            ref={password}
                            type="password"
                            placeholder="   Password"
                        />
                        <input ref={phone} type="text" placeholder="   Phone" />
                        <button onClick={submitHandler}>SIGN UP</button>
                        <span>
                            Login? <Link to="/login">Click</Link>
                        </span>
                    </Form>
                </div>
            )}
        </div>
    );
}

export default RegisterPage;
