import React, { useContext } from 'react';
import { BookContent } from '../context/BookContext';
import { ThemeContext } from "../context/ThemeContext";

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContent)

    const theme = isLightTheme ? light : dark;

    return (
        <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
            <ul>
                {books.map(book => {
                    return (
                        <li style={{  background: theme.ui }} key={book.id}>{ book.title }</li>
                    )
                })}
            </ul>
        </div>
    );
}

export default BookList; 