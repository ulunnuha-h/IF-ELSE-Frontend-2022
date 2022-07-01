import Nav from './Components/Nav/Nav.js';
import {Outlet} from 'react-router-dom'
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
    
  );
}

export default App;
