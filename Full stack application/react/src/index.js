import React from 'react';                        // Import the 'React' module from the 'react' library
import ReactDOM from 'react-dom';                 // Import the 'ReactDOM' module from the 'react-dom' library
import './index.css';                             // Import the CSS file for styling
import App from './App';                          // Import the root component of the application
import reportWebVitals from './reportWebVitals';   // Import the function for measuring app performance
import { BrowserRouter } from 'react-router-dom'; // Import the 'BrowserRouter' component from the 'react-router-dom' library

// Create a root element for rendering the React app
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// Render the app wrapped in BrowserRouter and StrictMode
root.render(
  <BrowserRouter>                         {/* Use BrowserRouter component to enable routing in the app */}
    <React.StrictMode>                     {/* Use StrictMode to enable additional development checks */}
      <App />                              {/* Render the root component of the application */}
    </React.StrictMode>
  </BrowserRouter>
);

// Measure performance in the app and log results
reportWebVitals();
