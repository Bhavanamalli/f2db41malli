const mongoose = require("mongoose")
const AeroplaneSchema = mongoose.Schema({
travel_name:  {
    type: String, 
    required: true
},
travel_price: {
    type: Number, 
    min:1,max:35000,
    required: true
},
travel_type:  {
    type: String, 
    required: true
},
})
module.exports = mongoose.model("Aeroplane",AeroplaneSchema)