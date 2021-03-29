import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthentication = () => {
        setIsAuthenticated(!isAuthenticated)
    };

    return ( 
        <AuthContext.Provider value={{isAuthenticated, authentication: handleAuthentication}}>
            {props.children}
        </AuthContext.Provider>
     );
}
 
export default AuthContextProvider;