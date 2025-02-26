const express = require("express");
const db = require("../config/db");

const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


//POST AND OTHER NEED TO IMPLEMENTED

module.exports = router;
