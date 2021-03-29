import React, { useContext } from 'react'
import { BookContextList } from '../contexts/BookContextList';
import { ThemeContext } from '../contexts/ThemeContext';


const BookList = () => {

    const { book } = useContext(BookContextList);
    const { data , isLightTheme} = useContext(ThemeContext);
    const { light, dark} = data;
    const theme = isLightTheme ? light : dark;

   
    
    return ( 
        <div className="book-list" style={{color: theme.syntax, background: theme.bg }}>
            <ul>
                {book && book.map(books => (
                    <li key={books.id} style={{background: theme.ui}}>{books.title}</li>
                ))}
            </ul>
        </div>
     );
}
 
export default BookList;