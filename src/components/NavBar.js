import React, { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { isAuthenticated, toggleAuth} = useContext(AuthContext)

    const theme = isLightTheme ? light : dark;

    return (
        <nav style={{ color: theme.syntax, background: theme.ui }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                { isAuthenticated ? 'Logged In' : 'Logged Out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

export default NavBar;