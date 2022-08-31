import Nav from './Components/Nav/Nav.js';
import React from 'react';
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer.js';
import { AuthProvider } from './Config/Auth.js';

function App() {
    return (
        <>
            <AuthProvider>
                <Nav/>
                <Outlet/>            
                <Footer/>
            </AuthProvider>
        </>
    );
} 

export default App;
