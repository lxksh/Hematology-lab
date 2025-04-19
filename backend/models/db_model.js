const mongoose = require('mongoose');

const predictedDataSchema = new mongoose.Schema({
  gender: { type: Number, required: true },  
  haemoglobin: { type: Number, required: true },
  mch: { type: Number, default:0 },
  mchc: { type: Number, default:0 },
  mcv: { type: Number, required: true },
  result: { type: String, required: true },
});

const PredictedData = mongoose.model('PredictedData', predictedDataSchema);

module.exports = PredictedData;