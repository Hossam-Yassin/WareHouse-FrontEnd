import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './grid/grid';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Grid/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//  =================================================
// import { useRoutes } from "react-router-dom";
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Grid from './grid/grid';

// const routes = {
//   "/products": () => <Grid />,
// };

// function App() {
//   const routeResult = useRoutes(routes);
//   return (
//     <div className="App">
//       <A href="/products">Products Grid</A>
//       {routeResult}
//     </div>
//   );
// }