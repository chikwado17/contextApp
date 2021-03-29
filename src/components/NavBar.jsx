import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';


const NavBar = () => {

    const { isAuthenticated, authentication } = useContext(AuthContext);
    const { data, isLightTheme } = useContext(ThemeContext);

    const { light, dark } = data;
    const theme = isLightTheme ? light : dark;

    return ( 
        <nav style={{color: theme.syntax, background: theme.ui}}>
            <h1>ContextApp</h1>
            <div>
                {!isAuthenticated ? 'Logged Out' : 'Logged In'}
            </div>
            {isAuthenticated &&
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>}<br/>
            <button onClick={authentication}>{isAuthenticated ? 'Log Out' : 'Log In'}</button>
        </nav>
     );
}
 
export default NavBar;