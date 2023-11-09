// ----------------------------------------------------------------------------
// ----------SỬ DỤNG useRouteLoaderData ĐỂ LOAD DỮ LIỆU TỪ ROUTER--------------
// -----------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------------
// -------SỬ DỤNG useState TẠO VÀ CẬP NHẬT TRẠNG THÁI CỦA MỘT ĐỐI TƯỢNG--------
// ----------SỬ DỤNG useEffect ĐỂ THEO DÕI CÁC ĐỐI TƯỢNG PHỤ THUỘC-------------
// ----------------------------------------------------------------------------

import { useRouteLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../ShopProducts.module.css";

function IPadComponent() {
    const items = useRouteLoaderData("items");
    const [results, setResults] = useState(0);
    const [first, setFirst] = useState(0);
    const ipadItems = [];

    for (let i = 0; i < items.items.length; i++) {
        if (items.items[i].category === "ipad") {
            ipadItems.push(items.items[i]);
        }
    }

    useEffect(() => {
        setResults(ipadItems.length);
        if (results < 1) {
            setFirst(0);
        } else {
            setFirst(1);
        }
    }, [ipadItems]);

    const navigate = useNavigate();

    const clickHandle = (event) => {
        for (let i = 0; i < items.items.length; i++) {
            if (event.target.src === items.items[i].img1) {
                navigate("/detail/" + items.items[i]._id.$oid);
                return;
            }
        }
    };

    return (
        <div>
            {!ipadItems.length && (
                <p style={{ textAlign: "center", color: "black" }}>
                    Đã hết hàng! Xin quý khách vui lòng đặt hàng trước!
                </p>
            )}
            {ipadItems.length > 0 && (
                <div>
                    <div className={styles.images}>
                        {ipadItems.map((item, index) => (
                            <div className={styles.details} key={index}>
                                <img src={item.img1} onClick={clickHandle} />
                                <h6>{item.name}</h6>
                                <p>
                                    {Number(item.price).toLocaleString("it-IT")}{" "}
                                    VND
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.showing}>
                        <div>
                            <button>&lt;&lt;</button>
                            <button
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                }}
                            >
                                1
                            </button>
                            <button>&gt;&gt;</button>
                        </div>
                        <div>
                            Showing {first} to {results} of {results} results
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default IPadComponent;
