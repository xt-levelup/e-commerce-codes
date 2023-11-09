import styles from "./SupportPage.module.css";

const SupportPage = () => {
    return (
        <div className={styles.messenger}>
            <div className={styles.contain}>
                <div className={styles.header}>
                    <h5>Customer Support</h5>
                    <button>Let's Chat App</button>
                </div>
                <hr />
                <div className={styles.customer}>
                    <div className={styles["customer-message"]}>Xin chào</div>
                    <div className={styles["customer-message"]}>
                        Làm thế nào để xem các sản phẩm
                    </div>
                </div>
                <div className={styles.support}>
                    <div>
                        <div className={styles["support-admin"]}>
                            &#129333; <span>ADMIN: Chào bạn</span>
                        </div>
                    </div>
                    <div>
                        <div className={styles["support-admin"]}>
                            &#129333;
                            <span>
                                ADMIN: Bạn có thể vào mục Shop để xem các sản
                                phẩm
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.message}>
                    <label>&#129333; </label>
                    <input type="text" placeholder="Enter Message!" />
                    <div className={styles["message-icons"]}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#000000"
                            viewBox="0 0 256 256"
                            style={{ fill: "rgb(114, 114, 114)" }}
                        >
                            <path d="M209.66,122.34a8,8,0,0,1,0,11.32l-82.05,82a56,56,0,0,1-79.2-79.21L147.67,35.73a40,40,0,1,1,56.61,56.55L105,193A24,24,0,1,1,71,159L154.3,74.38A8,8,0,1,1,165.7,85.6L82.39,170.31a8,8,0,1,0,11.27,11.36L192.93,81A24,24,0,1,0,159,47L59.76,147.68a40,40,0,1,0,56.53,56.62l82.06-82A8,8,0,0,1,209.66,122.34Z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#000000"
                            viewBox="0 0 256 256"
                            style={{ fill: "rgb(114, 114, 114)" }}
                        >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm82.92,60c-10.29,17.79-27.39,28-46.92,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.08-20a8,8,0,1,1,13.84,8ZM164,120a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z"></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="#000000"
                            viewBox="0 0 256 256"
                            style={{ fill: "blue" }}
                        >
                            <path d="M236.88,26.19a9,9,0,0,0-9.16-1.57L25.06,103.93a14.22,14.22,0,0,0,2.43,27.21L80,141.45V200a15.92,15.92,0,0,0,10,14.83,15.91,15.91,0,0,0,17.51-3.73l25.32-26.26L173,220a15.88,15.88,0,0,0,10.51,4,16.3,16.3,0,0,0,5-.79,15.85,15.85,0,0,0,10.67-11.63L239.77,35A9,9,0,0,0,236.88,26.19ZM183.53,208,100.85,135.5l119-85.29Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportPage;
