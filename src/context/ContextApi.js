// ----------------------------------------------------------------------
// -----------SỬ DỤNG createContext ĐỂ TẠO MỘT CONTEXT API---------------
// ------SỬ DỤNG useState THEO DÕI TRẠNG THÁI CỦA MỘT ĐỐI TƯỢNG----------
// ----------------------------------------------------------------------

import { createContext, useState } from "react";

export const DataContext = createContext();

export const ShopContext = ({ children }) => {
    const [emailSubscribe, setEmailSubscribe] = useState("");
    const [localStorageChange, setLocalStorageChange] = useState(false);

    const updateEmailSubscribe = (newEmailSubscribe) => {
        setEmailSubscribe(newEmailSubscribe);
    };
    const updateLocalStorageChange = (newLocalStorageChange) => {
        setLocalStorageChange(newLocalStorageChange);
    };
    return (
        <DataContext.Provider
            value={{
                emailSubscribe,
                updateEmailSubscribe,
                localStorageChange,
                updateLocalStorageChange,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
