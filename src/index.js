import React from 'react';
import ReactDOM from 'react-dom/client';

// Chapter Six: 4 methods to Style CSS in React
// import App from './react-style/app';

// Chapter Six: Inline CSS in React
// import App from './inline-css/app';

// Chapter Six: CSS class in React
// import App from './css-class/app';

// Chapter Six: CSS Module in React
// import App from './css-module/app';

// Chapter Six: JSS (Style Component) in React
import App from './jss-style-component/app';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
