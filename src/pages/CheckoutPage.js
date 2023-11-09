// --------------------------------------------------------------------
// ------------SỬ DỤNG Form ĐỂ TRUYỀN DỮ LIỆU FORM QUA ROUTER----------
// ---------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------
// ---SỬ DỤNG useRef ĐỂ LẤY THÔNG TIN TỪ ĐỐI TƯỢNG TRONG COMPONENT-----
// --------SỬ DỤNG useEffect ĐỂ THEO DÕI CÁC ĐỐI TƯỢNG PHỤ THUỘC-------
// ------SỬ DỤNG useState THEO DÕI TRẠNG THÁI CỦA MỘT ĐỐI TƯỢNG--------
// ---------SỬ DỤNG useSelector ĐỂ LẤY GIÁ TRỊ STATE TỪ REDUX----------
// --------------------------------------------------------------------

import { Form, useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
    const [itemHeight, setItemHeight] = useState(0);
    const one = useRef(null);
    const two = useRef(null);
    const three = useRef(null);
    const fullNameRef = useRef();
    const emailRef = useRef();
    const phoneNumberRef = useRef();
    const addressRef = useRef();
    const navigate = useNavigate();
    const checkoutItems = useSelector(
        (state) => state.checkoutItems.checkoutItems
    );
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) ?? null
    );
    const [fullName, setFullName] = useState(
        currentUser && currentUser.name ? currentUser.name : ""
    );
    const [email, setEmail] = useState(
        currentUser && currentUser.email ? currentUser.email : ""
    );
    const [phoneNumber, setPhoneNumber] = useState(
        currentUser && currentUser.phone ? currentUser.phone : ""
    );
    const [priceTotal, setPriceTotal] = useState(0);

    useEffect(() => {
        const priceTotalArr = checkoutItems
            ? checkoutItems.map((item) => item["0"].priceNumber * item.number)
            : [];
        setPriceTotal(
            priceTotalArr.length ? priceTotalArr.reduce((a, b) => a + b, 0) : 0
        );
    }, [checkoutItems]);

    useEffect(() => {
        const itemHeightTemp =
            one.current.offsetHeight +
            two.current.offsetHeight +
            three.current.offsetHeight +
            100;
        setItemHeight(itemHeightTemp);
    }, []);

    const fullNameControl = (event) => {
        setFullName(event.target.value);
    };
    const emailControl = (event) => {
        setEmail(event.target.value);
    };
    const phoneNumberControl = (event) => {
        setPhoneNumber(event.target.value);
    };

    const validForm = () => {
        let valid = true;
        if (
            !fullNameRef.current.value ||
            !emailRef.current.value ||
            !phoneNumberRef.current.value ||
            !addressRef.current.value
        ) {
            window.alert("Xin vui lòng nhập đầy đủ thông tin");
            valid = false;
            return;
        }
        if (!emailRef.current.value.includes("@")) {
            window.alert("Email không hợp lệ! Xin hãy nhập lại");
            valid = false;
            return;
        }
        if (isNaN(Number(phoneNumberRef.current.value))) {
            window.alert("Số điện thoại là những con số!");
            valid = false;
            return;
        }
        if (Number(phoneNumberRef.current.value.length < 9)) {
            window.alert("Số điện thoại từ 9 số trở lên!");
            valid = false;
            return;
        }

        return valid;
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (validForm()) {
            window.alert("Bạn đã đặt hàng thành công!");
            navigate("/");
        }
    };

    return (
        <div>
            <div className={styles.banner}>
                <h2>CHECKOUT</h2>
                <h6>
                    HOME / CART /{" "}
                    <span style={{ color: "rgb(156, 155, 155)" }}>
                        CHECKOUT
                    </span>
                </h6>
            </div>
            <div>
                <div className={styles.h3}>
                    <h3>BILLING DETAILS</h3>
                </div>
                <div className={styles.checkout}>
                    <Form className={styles["checkout-user"]}>
                        <div>
                            <label>FULL NAME</label>
                        </div>
                        <div>
                            <input
                                ref={fullNameRef}
                                type="text"
                                placeholder="Enter Your Full Name Here!"
                                value={fullName}
                                onChange={fullNameControl}
                            />
                        </div>
                        <div>
                            <label>EMAIL</label>
                        </div>
                        <div>
                            <input
                                ref={emailRef}
                                type="email"
                                placeholder="Enter Your Email Here!"
                                value={email}
                                onChange={emailControl}
                            />
                        </div>
                        <div>
                            <label>PHONE NUMBER</label>
                        </div>
                        <div>
                            <input
                                ref={phoneNumberRef}
                                type="number"
                                placeholder="Enter Your Phone Number Here!"
                                value={phoneNumber}
                                onChange={phoneNumberControl}
                            />
                        </div>
                        <div>
                            <label>ADDRESS</label>
                        </div>
                        <div>
                            <input
                                ref={addressRef}
                                type="text"
                                placeholder="Enter Your Address Here!"
                            />
                        </div>

                        <button onClick={submitHandler}>Place order</button>
                    </Form>
                    <div
                        className={styles["checkout-items"]}
                        style={{
                            height: `${itemHeight}px`,
                        }}
                    >
                        <h4 ref={one}>YOUR ORDER</h4>
                        <div ref={two} style={{ width: "100%" }}>
                            {checkoutItems.map((item) => {
                                return (
                                    <div style={{ width: "100%" }}>
                                        <div
                                            className={
                                                styles["checkout-items-details"]
                                            }
                                        >
                                            <h6>{item["0"].name}</h6>
                                            <p>
                                                {item["0"].price} x{" "}
                                                {item.number}
                                            </p>
                                        </div>
                                        <hr />
                                    </div>
                                );
                            })}
                        </div>
                        <div
                            ref={three}
                            className={styles["checkout-items-total"]}
                        >
                            <h5>TOTAL</h5>
                            <h6>{priceTotal.toLocaleString("it-IT")} VND</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutPage;
