import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import {router} from './router';
import { initializeApp } from "firebase/app";
import { CartContextProvider } from './context/CartContext';
const firebaseConfig = {
  apiKey: "AIzaSyBh_1QrqgjP5a6SEsAUSHHOkroT9Jat71Q",
  authDomain: "valmar-carpinteria.firebaseapp.com",
  projectId: "valmar-carpinteria",
  storageBucket: "valmar-carpinteria.appspot.com",
  messagingSenderId: "488143722969",
  appId: "1:488143722969:web:f448e58b9d656ec014a1c8"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
