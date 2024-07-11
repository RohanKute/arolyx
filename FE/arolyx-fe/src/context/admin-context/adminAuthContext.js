import { createContext, useContext } from "react";

export const AdminAuthContext = createContext(false);

export const useAdminAuth = () =>{
     return useContext(AdminAuthContext);
}

export const AdminAuthProvider = AdminAuthContext.Provider;