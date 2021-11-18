import React from 'react';
import { ThemeContext } from '../../contexts/ThemeContext.jsx';
import { NavBar } from '../NavBar/NavBar.jsx';
import { Footer } from './Footer.jsx';
import { Form } from './Form.jsx';
import logo from '../../logo.svg'



const Layout = () => {
    const { Styles, theme } = React.useContext(ThemeContext)
    console.log('Styles:', Styles)
    return (
        <>
            <NavBar />

            <div style={{ ...theme }}>
                <img src={logo} className="App-logo" alt="logo" />
                <Form />
                <Footer />


            </div>
        </>
    );
}

export { Layout }