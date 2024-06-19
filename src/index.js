import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddProduct from './AddProduct';
import SignUpUser from './SignUpUser'; // Import the SignUpUser component
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div>
      <AddProduct />
      <SignUpUser />  {/* Render the SignUpUser component */}
    </div>
  </React.StrictMode>
);

// If you want to measure the performance of your app, you can use the reportWebVitals function
// For example, to log results, you can use: reportWebVitals(console.log)
// Or send data to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
