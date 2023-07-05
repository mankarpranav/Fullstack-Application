import logo from './logo.svg';          // Import the logo image (not used in this component)
import './App.css';                    // Import the CSS file for styling

import { Route, Routes } from 'react-router-dom';      // Import the Route and Routes components from 'react-router-dom'
import VehicleForm from './Components/VehicleForm';    // Import the VehicleForm component
import VehicleTable from "./Components/VehicleTable";  // Import the VehicleTable component

function App() {
  return (
    <div>
      <Routes>                                      {/* Use the Routes component to define different routes */}
        <Route path="/" element={<VehicleTable />} />    {/* Define a route for the root path and render the VehicleTable component */}
        <Route path="/edit/:vid" element={<VehicleForm />} />  {/* Define a route for the '/edit/:vid' path and render the VehicleForm component */}
        <Route path="/form" element={<VehicleForm />} />       {/* Define a route for the '/form' path and render the VehicleForm component */}
      </Routes>
    </div>
  );
}

export default App;
