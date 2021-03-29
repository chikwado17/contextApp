import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const { toggleThemeMethod } = useContext(ThemeContext);


    return ( 
        <button onClick={toggleThemeMethod}>change Theme</button>
     );
}
 
export default ThemeToggle;