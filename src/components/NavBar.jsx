import React from 'react';

class NavBar extends React.Component {
    
    render() { 
        return ( 
            <nav>
                <h1>ContextApp</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default NavBar;