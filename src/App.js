import Nav from './Components/Nav/Nav.js';
import React from 'react';
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
    
  );
}

export default App;
