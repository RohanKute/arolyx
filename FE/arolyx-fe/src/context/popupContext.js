import { createContext, useContext } from "react";

export const PopupContext = createContext({
      text : '',
      messege : ''
});

export const usePopup = () =>{
     return useContext(PopupContext);
}

export const PopupContextProvider = PopupContext.Provider;