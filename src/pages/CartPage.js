// --------------------------------------------------------------------
// ------------SỬ DỤNG Form ĐỂ TRUYỀN DỮ LIỆU FORM QUA ROUTER----------
// ---------SỬ DỤNG Link THAY THẾ a CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH--------
// --------SỬ DỤNG useEffect ĐỂ THEO DÕI CÁC ĐỐI TƯỢNG PHỤ THUỘC-------
// ---------SỬ DỤNG useSelector ĐỂ LẤY GIÁ TRỊ STATE TỪ REDUX----------
// ------SỬ DỤNG useDispatch ĐỂ CẬP NHẬT GIÁ TRỊ STATE TỪ REDUX--------
// --------------------------------------------------------------------

import { Link, Form } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/ContextApi";
import { useSelector, useDispatch } from "react-redux";
import { updateCartActions } from "../store/updateCart";
import { checkoutItemsActions } from "../store/checkout";
import styles from "../components/shop-components/ProductList.module.css";

function CartPage() {
    const [subTotal, setSubTotal] = useState(0);
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("currentUser")) ?? null
    );

    const { localStorageChange, updateLocalStorageChange } =
        useContext(DataContext);
    const dispatch = useDispatch();
    const currentUserCart = useSelector(
        (state) => state.updateCart.currentUserCart
    );
    const userCarts = JSON.parse(localStorage.getItem("cartUsers")) ?? null;

    useEffect(() => {
        if (userCarts && currentUser) {
            const currentUserCartChange = [];
            for (let i = 0; i < userCarts.length; i++) {
                if (userCarts[i].user === currentUser.email) {
                    currentUserCartChange.push(userCarts[i]);
                }
            }

            dispatch(
                updateCartActions.UPDATE_CURRENT_USER_CART(
                    currentUserCartChange
                )
            );
        }
        if (userCarts && !currentUser) {
            const currentUserCartChange = [];
            for (let i = 0; i < userCarts.length; i++) {
                if (userCarts[i].user === "guest") {
                    currentUserCartChange.push(userCarts[i]);
                }
            }

            dispatch(
                updateCartActions.UPDATE_CURRENT_USER_CART(
                    currentUserCartChange
                )
            );
        }
    }, []);

    useEffect(() => {
        const priceArr = currentUserCart.length
            ? currentUserCart.map((item) => item["0"].priceNumber * item.number)
            : [];

        const priceArrSum = priceArr.length
            ? priceArr.reduce((a, b) => a + b, 0)
            : 0;

        setSubTotal(priceArrSum);
    }, [currentUserCart]);

    const incrementUpdateHandle = (index) => {
        dispatch(updateCartActions.INCREMENT(index));

        updateLocalStorageChange(!localStorageChange);
    };
    const decrementUpdateHandle = (index) => {
        dispatch(updateCartActions.DECREMENT(index));

        updateLocalStorageChange(!localStorageChange);
    };

    useEffect(() => {
        updateCartUsers();
    }, [currentUserCart]);

    const updateCartUsers = () => {
        let userCarts = JSON.parse(localStorage.getItem("cartUsers")) ?? null;

        if (userCarts && userCarts.length && currentUser) {
            for (let i = userCarts.length - 1; i >= 0; i--) {
                if (userCarts[i].user === currentUser.email) {
                    userCarts.splice(i, 1);
                }
            }
        }
        if (userCarts && userCarts.length && !currentUser) {
            for (let i = userCarts.length - 1; i >= 0; i--) {
                if (userCarts[i].user === "guest") {
                    userCarts.splice(i, 1);
                }
            }
        }
        if (userCarts) {
            localStorage.setItem(
                "cartUsers",
                JSON.stringify([...userCarts, ...currentUserCart])
            );
        }
        userCarts = JSON.parse(localStorage.getItem("cartUsers")) ?? null;

        updateLocalStorageChange(!localStorageChange);
    };

    const onCheckoutHandle = () => {
        dispatch(checkoutItemsActions.setCheckoutItems(currentUserCart));
    };

    const deleteItemHandle = (index) => {
        dispatch(updateCartActions.DELETE_CART(index));
        updateLocalStorageChange(!localStorageChange);
    };

    return (
        <div>
            <div className={styles.banner}>
                <h2>CART</h2>
                <h6>CART</h6>
            </div>
            <div className={styles["cart-contain"]}>
                <h4>SHOPPING CART</h4>
                <div className={styles.cart}>
                    <div className={styles["cart-details"]}>
                        <div className={styles["cart-header"]}>
                            <h6>IMAGE</h6>
                            <h6>PRODUCT</h6>
                            <h6>PRICE</h6>
                            <h6>QUANTITY</h6>
                            <h6>TOTAL</h6>
                            <h6>REMOVE</h6>
                        </div>
                        <div className={styles["cart-header-min"]}>
                            <h6>PRODUCTS IN CART</h6>
                        </div>
                        <div>
                            <div className={styles["cart-user-contain"]}>
                                {currentUserCart.map((item, index) => (
                                    <div
                                        className={styles["cart-user"]}
                                        key={index}
                                    >
                                        <img src={item["0"].img_urls[0]} />
                                        <h5>{item["0"].name}</h5>
                                        <p>{item["0"].price}</p>
                                        <span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="#000000"
                                                viewBox="0 0 256 256"
                                                onClick={() =>
                                                    decrementUpdateHandle(index)
                                                }
                                            >
                                                <path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"></path>
                                            </svg>
                                            {item.number}
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20"
                                                height="20"
                                                fill="#000000"
                                                viewBox="0 0 256 256"
                                                onClick={() =>
                                                    incrementUpdateHandle(index)
                                                }
                                            >
                                                <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                            </svg>
                                        </span>
                                        <p>
                                            {(
                                                item.number *
                                                item["0"].priceNumber
                                            ).toLocaleString("it-IT")}{" "}
                                            VND
                                        </p>
                                        <div
                                            className={
                                                styles["cart-user-delete"]
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-6 h-6"
                                                onClick={() =>
                                                    deleteItemHandle(index)
                                                }
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={styles["cart-navbar"]}>
                            <Link
                                to="/shop"
                                className={styles["cart-navbar-link"]}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>

                                <span>Continue shopping</span>
                            </Link>
                            <Link
                                to="/checkout"
                                onClick={onCheckoutHandle}
                                className={styles["cart-navbar-link-2"]}
                            >
                                <span>Proceed to checkout</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                    <div className={styles["cart-total"]}>
                        <h4>CART TOTAL</h4>
                        <div>
                            <div className={styles["cart-total-price"]}>
                                <h6>SUBTOTAL</h6>
                                <h6>{subTotal.toLocaleString("it-IT")} VND</h6>
                            </div>
                            <hr />
                            <div className={styles["cart-total-price"]}>
                                <h6>TOTAL</h6>
                                <h5>{subTotal.toLocaleString("it-IT")} VND</h5>
                            </div>
                            <Form>
                                <input placeholder="Enter your coupon" />
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        class="w-6 h-6"
                                    >
                                        <path d="M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z" />
                                    </svg>

                                    <span>Apply coupon</span>
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
