// ---------------------------------------------------------------
// -----SỬ DỤNG Outlet TRONG ROUTER ĐỂ HIỂN THỊ PHẦN TỬ CON-------
// ---------------------------------------------------------------

import { Outlet } from "react-router-dom";
import NavBarComponent from "./NavBarComponent";
import Footer from "./Footer";

const RootLayout = () => {
    return (
        <div>
            <NavBarComponent />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default RootLayout;
