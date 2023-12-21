const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stormSchema = new Schema(
  {
    cityName: String,
    affectArea: Number,
    deleteTime: Date,
  },
  { timestamps: true }
);

const Storm = mongoose.model("storm", stormSchema);

module.exports = Storm;