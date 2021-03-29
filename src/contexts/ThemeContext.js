import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {

    const [isLightTheme, setIsLightTheme] = useState(true);
    const [data, setDataArray]  =  useState({light: { syntax:'#555', ui:'#ddd', bg:'#eee' }, dark: { syntax: '#ddd', ui: '#333', bg:'#555' } })

    const handleChangeTheme = () => {
        setIsLightTheme(!isLightTheme)
    }

    return ( 
        <ThemeContext.Provider value={{data,isLightTheme, toggleThemeMethod: handleChangeTheme}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;