// --------------------------------------------------------------------
// ---------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------
// ------SỬ DỤNG useDispatch ĐỂ CẬP NHẬT GIÁ TRỊ STATE TỪ REDUX--------
// --------------------------------------------------------------------

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { popupActions } from "../../../store/popup";
import styles from "./ItemDetailPopup.module.css";

const ItemDetailPopup = ({ itemDesc }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clickHandle = () => {
        navigate("/detail/" + itemDesc.id);
        dispatch(popupActions.togglePopup());
    };

    const closeHandle = () => {
        dispatch(popupActions.togglePopup());
    };

    return (
        <div className={styles.contain}>
            <div className={styles.content}>
                <div className={styles.close}>
                    <button onClick={closeHandle}>X</button>
                </div>
                <div className={styles.description}>
                    <div className={styles.image}>
                        <img src={itemDesc.img1} />
                    </div>
                    <div className={styles.details}>
                        <h3>{itemDesc.name}</h3>
                        <h4>
                            {Number(itemDesc.price).toLocaleString("it-IT")} VND
                        </h4>
                        <p>{itemDesc.description}</p>
                        <button onClick={clickHandle}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                class="w-6 h-6"
                            >
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>
                            View details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetailPopup;
