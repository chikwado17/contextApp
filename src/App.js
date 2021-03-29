import React from 'react';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';
import BookContextListProvider from './contexts/BookContextList';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
          <AuthContextProvider>
              <NavBar/>
              <BookContextListProvider>
                  <BookList/>
              </BookContextListProvider>
              <ThemeToggle/>
          </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
