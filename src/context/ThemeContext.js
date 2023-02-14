import React, { useState } from 'react';

export const ThemeContext = React.createContext(); // create context

function ThemeContextProvider(props) {
    const [state, setState] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }); // use useState hook to define state

    return (
        <ThemeContext.Provider value={{ ...state }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider; 