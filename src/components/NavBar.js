import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";


const NavBar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);

    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ color: theme.syntax, background: theme.ui }}>
            <h1>Context App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;