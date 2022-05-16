import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Menu from './navbar';
import Hero from './hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <Menu />
    <Hero />
    <App />
    
   
  </React.StrictMode>
);



reportWebVitals();
