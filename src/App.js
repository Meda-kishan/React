  import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Myfunc from './components/Counter';
import { useState } from 'react';

function App() {

  const [mode,setMode] =useState('light');

  const toggleMode=() =>{
    if(mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
    }

    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
        <Navbar
             mode={mode} toggleMode={toggleMode}
             nav_element1="Home" 
             nav_element2="Word Counter" 
             nav_element3="About us" 
             nav_element4="Contact us"/>

      <Myfunc heading="changed Heading"
        paraText="This is updated paragraph Text" 
        summary="Text Summary"
        mode={mode} />

  </>

  );
}

export default App;
