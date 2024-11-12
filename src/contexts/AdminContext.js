import { createContext, useState } from "react";

export const AdminContext = createContext();


export default function AdminProvider({ children }) {
    const [user, setUser] = useState(null);

    return (
        <AdminContext.Provider value={{ user, setUser }}>
            {children}
        </AdminContext.Provider>
    );
}
