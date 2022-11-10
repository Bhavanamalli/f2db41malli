const mongoose = require("mongoose")
const AeroplaneSchema = mongoose.Schema({
travel_name:  String,
travel_price: Number,
travel_type:  String
})
module.exports = mongoose.model("Aeroplane",AeroplaneSchema)