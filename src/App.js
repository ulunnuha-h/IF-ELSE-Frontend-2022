import Nav from './Components/Nav/Nav.js';
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
    
  );
}

export default App;
