import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const { toggleTheme, toggleIcon } = useContext(ThemeContext);
    return ( 
        <i onClick={toggleTheme}  style={{ cursor: 'pointer', fontSize: '2rem' }}>{toggleIcon()}</i>
     );
}
 
export default ThemeToggle;