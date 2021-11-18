import React from 'react';
import { Styles } from '../components/Styles.js'





export const ThemeContext = React.createContext();

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = React.useState(Styles.light);

    const toggleTheme = (value) => {
        setTheme(value);
    };

    return <ThemeContext.Provider value={{
        Styles,
        theme,
        toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
}