import React from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from './pip/pip';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <ProductDetails productID='4' />
  </React.StrictMode>,
  document.getElementById('root')
);