import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


class ThemeToggle extends Component {
    state = {  }
    render() { 
        return ( 
            <ThemeContext.Consumer>{(toggle) => {
                const { toggleThemeMethod } = toggle;
                return (
                    <button onClick={toggleThemeMethod}>change Theme</button>
                )
            }}
            </ThemeContext.Consumer>
         );
    }
}
 
export default ThemeToggle;