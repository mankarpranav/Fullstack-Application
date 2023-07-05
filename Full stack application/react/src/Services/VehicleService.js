import axios from 'axios';          // Import the 'axios' library for making HTTP requests

const baseurl = "http://localhost:3005";   // Define the base URL for API requests

class VehicleService {
  // Get vehicle by ID
  getVehiclebyId = (id) => {
    return axios.get(baseurl + "/vehicles/" + id);   // Make a GET request to retrieve vehicle data by ID
  };

  // Get all vehicles
  getVehicles = () => {
    return axios.get(baseurl + "/vehicles/");   // Make a GET request to retrieve all vehicle data
  };

  // Delete vehicle by ID
  deleteById(id) {
    return axios.delete(baseurl + "/vehicles/delete/" + id);   // Make a DELETE request to delete a vehicle by ID
  }

  // Insert a new vehicle
  insertVeh(veh) {
    console.log("In insertVeh: " + veh.vid);
    return axios.post(baseurl + "/vehicles/vehicle/", veh);   // Make a POST request to insert a new vehicle
  }

  // Update an existing vehicle
  updateVeh(veh) {
    console.log("In updateVeh: " + veh.vid);
    return axios.put(baseurl + "/vehicles/vehicle/", veh);   // Make a PUT request to update an existing vehicle
  }
}

export default new VehicleService;
