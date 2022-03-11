import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Grid from './grid/grid';
import ProductDetails from './pip/pip';

import reportWebVitals from './reportWebVitals';
ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route exact path="product/:productID" element={<ProductDetails />} />
          <Route exact path="products" element={<Grid />} />
        </Route>
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();