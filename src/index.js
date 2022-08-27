import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom'
import MainRouts from './routs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <MainRouts/>
   </BrowserRouter>
  </React.StrictMode>
);


