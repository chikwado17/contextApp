import React, { createContext, useState } from 'react';

export const BookContextList = createContext();

const BookContextListProvider = (props) => {
    const [book, setBook] = useState([
        {title: 'the way of the kings', id: 1},
        {title: 'the name of the wind', id: 2},
        {title: 'the final empire', id: 3}
    ])
    return (
        <BookContextList.Provider value={{book}}>
            {props.children}
        </BookContextList.Provider>
    )
}

export default BookContextListProvider;