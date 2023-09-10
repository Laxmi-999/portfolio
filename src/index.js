import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { render, screen } from '@testing-library/react';
import './index.css';
import MyApp from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


render(
  <React.StrictMode>
  
  
    <MyApp />
  </React.StrictMode>,
  document.getElementById('root')


);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


