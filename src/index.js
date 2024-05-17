import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Myfunc from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Myfunc heading="changed Heading"
      paraText="This is updated paragraph Text" 
      summary="Text Summary" />
  </React.StrictMode>
);

