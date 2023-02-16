import React, { useReducer } from 'react'; 
import { bookReducer } from '../Reducers/bookReducers';

export const BookContext = React.createContext();


const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, []);
    return ( 
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;
