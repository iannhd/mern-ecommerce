import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'

import productReducer, { productsFetch } from './features/productSlice'
import { productApi } from './features/productApi'
import cartReducer from './features/cartSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productApi.reducerPath] : productApi.reducer,

  },
  middleware: (getDefaultMiddleware) => 
  getDefaultMiddleware().concat(productApi.middleware)
})

store.dispatch(productsFetch())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
