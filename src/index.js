import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Myfunc from './components/Counter';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar  nav_element1="Home" 
             nav_element2="Word Counter" 
             nav_element3="About us" 
             nav_element4="Contact us"/>
    <Myfunc heading="changed Heading"
      paraText="This is updated paragraph Text" 
      summary="Text Summary" />
  </React.StrictMode>
);

