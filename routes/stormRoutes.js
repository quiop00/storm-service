const express = require("express");
const Storm = require("../models/Storm");

const stormRouter = express.Router();

// Implement retrieve storm list API
stormRouter.route(":/name").get(async (req, res) => {
  const cityName = req.params.name;

  const storms = await Storm.find({
    $or: [
      { city: cityName },
      { city: { $exists: false } }
    ],
  }).sort({ city: -1, deleteTime: 1 });
  
  res.json(storms);
});

module.exports = stormRouter;