import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './navbar.css'

const NavBar = () => {
    const { theme, Styles, toggleTheme } = React.useContext(ThemeContext)

    return (
        <>
            <div className="navbar">

                <button
                    className="btn btn-secondary text-info mx-5 "
                    onClick={() => {
                        toggleTheme(theme === Styles.dark ? Styles.light : Styles.dark);
                    }}
                >{theme === Styles.dark ? "Light Mode" : "Dark Mode"}</button>
            </div>
        </>
    );
}

export { NavBar }