// -----------------------------------------------------------------------------------
// ----------------SỬ DỤNG useLoaderData ĐỂ LOAD DỮ LIỆU TỪ ROUTER--------------------
// ---------------SỬ DỤNG Suspense ĐỂ TẠO THÔNG BÁO LOADING DỮ LIỆU-------------------
// ----------SỬ DỤNG useState TẠO VÀ CẬP NHẬT TRẠNG THÁI CỦA MỘT ĐỐI TƯỢNG------------
// --SỬ DỤNG createPortal ĐỂ RENDER ĐỐI TƯỢNG ĐẾN MỘT VỊ TRÍ DOM NGOÀI PHẠM VI CHA----
// -----SỬ DỤNG defer, Await ĐỂ TẠO VÀ XỬ LÝ DỮ LIỆU BẤT ĐỒNG BỘ HIỆU QUẢ-------------
// -----SỬ DỤNG json ĐỂ TẠO THÔNG BÁO LỖI CHI TIẾT (CÓ THỂ SỬ DỤNG SAU NÀY)-----------
// -----SỬ DỤNG json ĐỂ TẠO THÔNG BÁO LỖI CHI TIẾT (CÓ THỂ SỬ DỤNG SAU NÀY)-----------
// -------------SỬ DỤNG useSelector ĐỂ LẤY GIÁ TRỊ STATE TỪ REDUX---------------------
// ----------SỬ DỤNG useDispatch ĐỂ CẬP NHẬT GIÁ TRỊ STATE TỪ REDUX-------------------
// -----------------------------------------------------------------------------------

import { Suspense, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { popupActions } from "../../../store/popup";
import { useLoaderData, defer, Await, json } from "react-router-dom";
import styles from "./ProductItems.module.css";
import ItemDetailPopup from "./ItemDetailPopup";

const url =
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74";

const ProductItems = () => {
    const { items } = useLoaderData();
    const dispatch = useDispatch();
    const showPopup = useSelector((state) => state.popup.showPopup);
    const [itemDesc, setItemDesc] = useState(null);

    const popupHandle = (event) => {
        dispatch(popupActions.togglePopup());
        const itemUrl = event.target.src;
        for (let i = 0; i < items.length; i++) {
            if (itemUrl === items[i].img1) {
                setItemDesc({
                    id: items[i]._id.$oid,
                    img1: items[i].img1,
                    name: items[i].name,
                    price: items[i].price,
                    description: items[i].short_desc,
                });
                return;
            }
        }
    };

    return (
        <Suspense
            fallback={
                <p style={{ textAlign: "center", fontSize: "24px" }}>
                    Loading...
                </p>
            }
        >
            <Await resolve={items}>
                <div>
                    <div className={styles.contain}>
                        {items.map((item, index) => (
                            <div key={index} className={styles.image}>
                                <img src={item.img1} onClick={popupHandle} />
                                <p>{item.name}</p>
                                <div className={styles.price}>
                                    {Number(item.price).toLocaleString("it-IT")}{" "}
                                    VND
                                </div>
                            </div>
                        ))}
                        {showPopup &&
                            createPortal(
                                <ItemDetailPopup itemDesc={itemDesc} />,
                                document.body
                            )}
                    </div>
                </div>
            </Await>
        </Suspense>
    );
};

export default ProductItems;
export async function loader() {
    const dataFetch = await fetch(url);
    if (!dataFetch.ok) {
        throw json(
            {
                message: "Không thể tải dữ liệu",
            },
            {
                status: 500,
            }
        );
    } else {
        const data = await dataFetch.json();
        console.log(data.slice(0, 8));
        return defer({
            items: await data.slice(0, 8),
        });
    }
}
