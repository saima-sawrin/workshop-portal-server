const mongoose =  require("mongoose");
const eventSchema =new mongoose.Schema(
    {

    Title : String,
    Description: String,
    Location : String,
    host: String,
    aboutHost : String,
    course: String,
    overview : String,
    forWhom: Array,
    
     Date: {
        type : Date,
     }
})
module.exports = eventSchema;

