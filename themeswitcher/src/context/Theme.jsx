import React from "react";
import { useContext, createContext } from "react";

export const ThemeContext = createContext({
    ThemeMode : 'light',
    LightMode : ()=>{},
    DarkMode : ()=>{}
    
});

export const ThemeContextProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}


