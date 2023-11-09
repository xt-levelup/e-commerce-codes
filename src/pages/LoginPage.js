// --------------------------------------------------------------------
// ------------SỬ DỤNG Form ĐỂ TRUYỀN DỮ LIỆU FORM QUA ROUTER----------
// ---------SỬ DỤNG Link THAY THẾ a CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH--------
// ---------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------
// ---SỬ DỤNG useRef ĐỂ LẤY THÔNG TIN TỪ ĐỐI TƯỢNG TRONG COMPONENT-----
// ------SỬ DỤNG useDispatch ĐỂ CẬP NHẬT GIÁ TRỊ STATE TỪ REDUX--------
// ---------SỬ DỤNG useSelector ĐỂ LẤY GIÁ TRỊ STATE TỪ REDUX----------
// --------------------------------------------------------------------

import { Form, Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import { updateCartActions } from "../store/updateCart";
import styles from "./RegisterPage.module.css";

function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.authentication.auth);
    const email = useRef();
    const password = useRef();
    const userArr = JSON.parse(localStorage.getItem("userArr")) ?? [];

    const validSignin = () => {
        let valid = true;
        const emailValidArr = userArr.map((user) => user.email);

        if (!email.current.value || !password.current.value) {
            window.alert("Xin vui lòng nhập đủ thông tin!");
            valid = false;
            return;
        }
        if (!email.current.value.includes("@")) {
            window.alert("Email không hợp lệ!");
            valid = false;
            password.current.value = "";
            return;
        }
        if (!emailValidArr.includes(email.current.value)) {
            window.alert("Email này chưa được đăng ký!");
            valid = false;
            password.current.value = "";
            return;
        }
        for (let i = 0; i < userArr.length; i++) {
            if (
                userArr[i].email === email.current.value &&
                userArr[i].password !== password.current.value
            ) {
                window.alert("Mật khẩu không chính xác!");
                valid = false;
                password.current.value = "";
                return;
            }
        }
        return valid;
    };
    const submitSigninHandler = (event) => {
        event.preventDefault();
        if (validSignin()) {
            console.log("Đăng nhập thành công!");
            for (let i = 0; i < userArr.length; i++) {
                if (userArr[i].email === email.current.value) {
                    localStorage.setItem(
                        "currentUser",
                        JSON.stringify({
                            name: userArr[i].name,
                            email: userArr[i].email,
                            password: userArr[i].password,
                            phone: userArr[i].phone,
                        })
                    );
                    break;
                }
            }
            email.current.value = "";
            password.current.value = "";
            dispatch(authActions.ON_LOGIN());
            dispatch(updateCartActions.UPDATE_CURRENT_USER_CART([]));
            navigate("/shop");
        }
    };

    return (
        <div>
            {!isAuth && (
                <div className={styles.contain}>
                    <div className={styles.content}>
                        <Form>
                            <h2>Sign In</h2>

                            <input
                                ref={email}
                                type="email"
                                placeholder="   Email"
                            />
                            <input
                                ref={password}
                                type="password"
                                placeholder="   Password"
                            />

                            <button onClick={submitSigninHandler}>
                                SIGN IN
                            </button>
                            <span>
                                Create an account?{" "}
                                <Link to="/register">Click</Link>
                            </span>
                        </Form>
                    </div>
                </div>
            )}
            {isAuth && (
                <p style={{ textAlign: "center", color: "black" }}>
                    Bạn đã đăng nhập!
                </p>
            )}
        </div>
    );
}

export default LoginPage;
