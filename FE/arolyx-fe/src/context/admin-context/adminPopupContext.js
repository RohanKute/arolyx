import { createContext, useContext } from "react";

export const AdminPopupContext = createContext({
      text : '',
      messege : ''
});

export const useAdminPopup = () =>{
     return useContext(AdminPopupContext);
}

export const AdminPopupContextProvider = AdminPopupContext.Provider;