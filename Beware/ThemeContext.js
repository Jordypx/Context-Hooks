import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';


export const ThemeContext = React.createContext(); // create context

function ThemeContextProvider(props) {
    const [state, setState] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    }); // use useState hook to define state

    const toggleTheme = () => {
        setState({ ...state, isLightTheme: !state.isLightTheme });
      };

      const toggleIcon = () => {
        return state.isLightTheme ? <FaMoon /> : <FaSun />;
      };
      

    return (
        <ThemeContext.Provider value={{ ...state, toggleTheme, toggleIcon }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;