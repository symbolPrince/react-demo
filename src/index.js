/*
 * @Descripttion: 
 * @version: 3.0
 * @Author: symbolSong
 * @Date: 2020-05-26 10:03:44
 * @LastEditors: symbolSong
 * @LastEditTime: 2020-05-29 17:35:06
 */ 
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Nav from './Nav/Nav'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  // <React.StrictMode></React.StrictMode>
    <App />
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
