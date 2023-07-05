const express = require("express");
const router = express.Router();

const conn = require("../dbconnect/dbconn");

// Get vehicle by ID
router.get("/vehicles/:vid", (req, resp) => {
  console.log("In get by ID");
  conn.query(
    "SELECT * FROM veh WHERE vid=?",
    [req.params.vid],
    (err, data) => {
      if (err) {
        resp.status(500).send(JSON.stringify("Data not found: " + err));
        console.log(JSON.stringify(err));
      } else {
        resp.send(data[0]);
      }
    }
  );
});

// Get all vehicles
router.get("/vehicles", (req, resp) => {
  conn.query("SELECT * FROM veh", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resp.send(data);
    }
  });
});

// Delete vehicle by ID
router.delete("/vehicles/delete/:vid", (req, resp) => {
  console.log("In delete");
  conn.query("DELETE FROM veh WHERE vid=?", [req.params.vid], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      resp.send("Deleted successfully");
    }
  });
});

// Create a new vehicle
router.post("/vehicles/vehicle", (req, resp) => {
  console.log("In post");
  conn.query(
    "INSERT INTO veh VALUES (?, ?, ?)",
    [req.body.vid, req.body.price, req.body.vname],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        resp.send(data);
      }
    }
  );
});

// Update vehicle
router.put("/vehicles/vehicle", (req, resp) => {
  console.log("In update");
  conn.query(
    "UPDATE veh SET price=?, vname=? WHERE vid=?",
    [req.body.price, req.body.vname, req.body.vid],
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        resp.send(data);
      }
    }
  );
});

module.exports = router;
