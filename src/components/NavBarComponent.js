// --------------------------------------------------------------------
// -----SỬ DỤNG NavLink THAY THẾ Link TIỆN HƠN KHI CẦN Active Link-----
// ---------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------
// ---------SỬ DỤNG useSelector ĐỂ LẤY GIÁ TRỊ STATE TỪ REDUX----------
// ------SỬ DỤNG useDispatch ĐỂ CẬP NHẬT GIÁ TRỊ STATE TỪ REDUX--------
// --------------------------------------------------------------------

import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import styles from "./NavBarComponent.module.css";

const NavBarComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.authentication.auth);
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userName = currentUser ? currentUser.name : "";
    const displayNameArr = userName.split(" ");
    const displayName = displayNameArr[displayNameArr.length - 1].trim();
    const displayFirstCharArr = displayNameArr.map((char) => char.slice(0, 1));
    const displayFullName =
        displayName +
        displayFirstCharArr.slice(0, displayFirstCharArr.length - 1).join("");

    const deleteGuestStorage = () => {
        let userCarts = JSON.parse(localStorage.getItem("cartUsers")) ?? null;
        const currentUser =
            JSON.parse(localStorage.getItem("currentUser")) ?? null;

        if (userCarts.length && !currentUser) {
            for (let i = userCarts.length - 1; i >= 0; i--) {
                if (userCarts[i].user === "guest") {
                    userCarts.splice(i, 1);
                }
            }
        }
        localStorage.setItem("cartUsers", JSON.stringify([...userCarts]));
    };

    if (currentUser) {
        dispatch(authActions.ON_LOGIN());
    }

    const logoutHandler = () => {
        localStorage.removeItem("currentUser");
        dispatch(authActions.ON_LOGOUT());
        deleteGuestStorage();
        navigate("/");
    };

    return (
        <div className={styles.contain}>
            <div className={styles.content1}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Home
                </NavLink>

                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                >
                    Shop
                </NavLink>
            </div>

            <h2>BOUTIQUE</h2>
            <div className={styles.content2}>
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.icon
                    }
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-6 h-6"
                    >
                        <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                    </svg>{" "}
                    Cart
                </NavLink>

                {isAuth && (
                    <div className={styles.auth}>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            {displayFullName}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="#000000"
                                viewBox="0 0 256 256"
                            >
                                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"></path>
                            </svg>
                        </span>
                        <button onClick={logoutHandler}>(Logout)</button>
                    </div>
                )}
                {!isAuth && (
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? styles.active : styles.icon
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 h-6"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default NavBarComponent;
