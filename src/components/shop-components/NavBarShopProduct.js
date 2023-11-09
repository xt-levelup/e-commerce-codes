// -----------------------------------------------------------------------
// -----SỬ DỤNG NavLink THAY THẾ Link TIỆN HƠN KHI CẦN Active Link--------
// -----------------------------------------------------------------------

import { NavLink } from "react-router-dom";
import styles from "./ProductList.module.css";

const NavBarShop = () => {
    return (
        <div>
            <div className={styles.hidden}>
                <h4>CATEGORIES</h4>
                <h5>APPLE</h5>
                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    All
                </NavLink>
                <h6>IPHONE & MAC</h6>
                <NavLink
                    to="/shop/iphone"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    iPhone
                </NavLink>
                <NavLink
                    to="/shop/ipad"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    iPad
                </NavLink>
                <NavLink
                    to="/shop/macbook"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Macbook
                </NavLink>
                <h6>WIRELESS</h6>
                <NavLink
                    to="/shop/airpod"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Airpod
                </NavLink>
                <NavLink
                    to="/shop/watch"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Watch
                </NavLink>
                <h6>MOUSE</h6>
                <NavLink
                    to="/shop/mouse"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Mouse
                </NavLink>
                <NavLink
                    to="/shop/keyboard"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Keyboard
                </NavLink>
                <NavLink
                    to="/shop/other"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Other
                </NavLink>
            </div>
            <div className={styles.mobile}>
                <NavLink
                    to="/shop"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    All
                </NavLink>

                <NavLink
                    to="/shop/iphone"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    iPhone
                </NavLink>
                <NavLink
                    to="/shop/ipad"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    iPad
                </NavLink>
                <NavLink
                    to="/shop/macbook"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Macbook
                </NavLink>

                <NavLink
                    to="/shop/airpod"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Airpod
                </NavLink>
                <NavLink
                    to="/shop/watch"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Watch
                </NavLink>

                <NavLink
                    to="/shop/mouse"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Mouse
                </NavLink>
                <NavLink
                    to="/shop/keyboard"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Keyboard
                </NavLink>
                <NavLink
                    to="/shop/other"
                    className={({ isActive }) =>
                        isActive ? styles.active : undefined
                    }
                    end
                >
                    Other
                </NavLink>
            </div>
        </div>
    );
};

export default NavBarShop;
