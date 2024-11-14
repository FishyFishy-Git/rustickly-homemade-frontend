import { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();

export default function AdminProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                let cookies = document.cookie.split("; ");
                let cookiesObj = {};
                cookies.forEach((cookie) => {
                    let cookieKeyValue = cookie.split("=");
                    cookiesObj[cookieKeyValue[0]] = cookieKeyValue[1];
                });
                if (Object.keys(cookiesObj).includes("user")) {
                    setUser(cookiesObj.user);
                }
            } catch (err) {
                console.error(`Error getting user info: ${err}`);
            }
        })();
    }, []);

    return (
        <AdminContext.Provider value={{ user, setUser }}>
            {children}
        </AdminContext.Provider>
    );
}
