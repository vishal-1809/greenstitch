const mongoose = require('mongoose');

const FootprintSchema = mongoose.Schema({
  month: { type: String, require:true },
  spinning: {type: Number, default: 0},
  transportation: {type: Number, default: 0},
  carding: {type: Number, default: 0},
  heatingCooling: {type: Number, default: 0}
});

module.exports = mongoose.model("Footprint", FootprintSchema);