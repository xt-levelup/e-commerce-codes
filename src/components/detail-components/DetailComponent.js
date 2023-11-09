// --------------------------------------------------------------------
// --------SỬ DỤNG useRouteLoaderData ĐỂ LOAD DỮ LIỆU TỪ ROUTER--------
// ---SỬ DỤNG useParams ĐỂ LẤY GIÁ TRỊ MỞ RỘNG Ở ĐỊA CHỈ ĐƯỜNG DẪN-----
// ------------SỬ DỤNG Form ĐỂ TRUYỀN DỮ LIỆU FORM QUA ROUTER----------
// --------SỬ DỤNG useEffect ĐỂ THEO DÕI CÁC ĐỐI TƯỢNG PHỤ THUỘC-------
// ---------SỬ DỤNG useNavigate ĐỂ CHUYỂN HƯỚNG ĐẾN TRANG ĐÍCH---------
// ---SỬ DỤNG useRef ĐỂ LẤY THÔNG TIN TỪ ĐỐI TƯỢNG TRONG COMPONENT-----
// ---------SỬ DỤNG useSelector ĐỂ LẤY GIÁ TRỊ STATE TỪ REDUX----------
// ------SỬ DỤNG useDispatch ĐỂ CẬP NHẬT GIÁ TRỊ STATE TỪ REDUX--------
// --------------------------------------------------------------------

import {
    useRouteLoaderData,
    useParams,
    Form,
    useNavigate,
} from "react-router-dom";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { numberToCartActions } from "../../store/nuberToCart";
import { cartActions } from "../../store/cart";
import styles from "./DetailComponent.module.css";

function DetailComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const number = useSelector((state) => state.numberToCart.number);
    const cartDetails = useSelector((state) => state.addToCart.cartOject);
    const cartUsers = JSON.parse(localStorage.getItem("cartUsers")) ?? [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) ?? null;
    const toView = useRef();

    const incrementHandler = () => {
        dispatch(numberToCartActions.increment());
    };

    const decrementHandler = () => {
        dispatch(numberToCartActions.decrement());
    };

    const items = useRouteLoaderData("items");
    const params = useParams();
    const itemDetail = [];
    const itemRelated = [];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    for (let i = 0; i < items.items.length; i++) {
        if (params.productId === items.items[i]._id.$oid) {
            itemDetail.push({
                category: items.items[i].category,
                id: items.items[i]._id.$oid,
                name: items.items[i].name,
                short_desc: items.items[i].short_desc,
                long_desc: items.items[i].long_desc,
                price:
                    Number(items.items[i].price).toLocaleString("it-IT") +
                    " VND",
                priceNumber: Number(items.items[i].price),
                img_urls: [
                    items.items[i].img1,
                    items.items[i].img2,
                    items.items[i].img3,
                    items.items[i].img4,
                ],
            });
            break;
        }
    }

    useEffect(() => {
        const currentUserEmail = currentUser ? currentUser.email : "guest";
        const newItemDetail = {
            ...itemDetail,
            number,
            user: currentUserEmail,
        };
        dispatch(cartActions.ADD_CART(newItemDetail));
    }, [number, params]);

    for (let i = 0; i < items.items.length; i++) {
        if (
            itemDetail[0].category === items.items[i].category &&
            itemDetail[0].id !== items.items[i]._id.$oid
        ) {
            itemRelated.push({
                category: items.items[i].category,
                id: items.items[i]._id.$oid,
                name: items.items[i].name,
                short_desc: items.items[i].short_desc,
                long_desc: items.items[i].long_desc,
                price:
                    Number(items.items[i].price).toLocaleString("it-IT") +
                    " VND",
                priceNumber: Number(items.items[i].price),
                img_urls: [
                    items.items[i].img1,
                    items.items[i].img2,
                    items.items[i].img3,
                    items.items[i].img4,
                ],
            });
        }
    }

    let longDesc;
    if (itemDetail[0].long_desc.includes("•")) {
        longDesc = itemDetail[0].long_desc.split("•");
    } else {
        longDesc = itemDetail[0].long_desc.split("-");
    }

    const addToCartHandler = () => {
        if (cartUsers.length) {
            for (let i = 0; i < cartUsers.length; i++) {
                if (
                    cartUsers[i]["0"].id &&
                    cartUsers[i].user === cartDetails.user &&
                    cartUsers[i]["0"].id === cartDetails["0"].id
                ) {
                    cartUsers[i].number =
                        cartDetails.number + cartUsers[i].number;
                    localStorage.setItem(
                        "cartUsers",
                        JSON.stringify(cartUsers)
                    );
                    return;
                }
            }
        }

        cartUsers.push(cartDetails);
        localStorage.setItem("cartUsers", JSON.stringify(cartUsers));
        window.alert("Đã thêm vào giỏ hàng!");
    };

    const clickHandle = (event) => {
        window.scrollTo({ top: 200, behavior: "smooth" });
        for (let i = 0; i < items.items.length; i++) {
            if (event.target.src === items.items[i].img1) {
                navigate("/detail/" + items.items[i]._id.$oid);
                return;
            }
        }
    };

    return (
        <div className={styles.contain}>
            <div ref={toView} className={styles.banner}>
                <h2>DETAIL</h2>
                <h6>DETAIL</h6>
            </div>
            <div className={styles.information}>
                <div>
                    <img src={itemDetail[0].img_urls[0]} />
                </div>
                <div className={styles["info-des"]}>
                    <div>
                        <h3>{itemDetail[0].name}</h3>
                        <h6>{itemDetail[0].price}</h6>
                        <p>{itemDetail[0].short_desc}</p>

                        <p style={{ paddingTop: "1em" }}>
                            <span> CATEGORY: </span> {itemDetail[0].category}
                        </p>
                    </div>
                    <Form className={styles.form}>
                        <span
                            style={{
                                fontStyle: "italic",
                                color: "rgb(114, 109, 109)",
                            }}
                        >
                            QUANTITY
                        </span>
                        <span className={styles.number}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#000000"
                                viewBox="0 0 256 256"
                                onClick={decrementHandler}
                            >
                                <path d="M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z"></path>
                            </svg>

                            <span style={{ fontSize: "18px" }}>{number}</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="#000000"
                                viewBox="0 0 256 256"
                                onClick={incrementHandler}
                            >
                                <path d="M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                            </svg>
                        </span>
                        <button onClick={addToCartHandler}>Add to cart</button>
                    </Form>
                </div>
            </div>

            <div className={styles.description}>
                <h5>DESCRIPTION</h5>
                <h6>PRODUCT DESCRIPTION</h6>
                <p>{longDesc[0].toUpperCase()}:</p>
                {longDesc.slice(1).map((text) => (
                    <p>• {text}</p>
                ))}
            </div>
            <div className={styles.related}>
                <h5>RELATED PRODUCTS</h5>
                <div className={styles["related-products"]}>
                    {itemRelated.map((item) => {
                        return (
                            <div className={styles["related-product-details"]}>
                                <img
                                    src={item.img_urls[0]}
                                    onClick={clickHandle}
                                />
                                <h5>{item.name}</h5>
                                <h6>{item.price}</h6>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DetailComponent;
