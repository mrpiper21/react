const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    text:{
        type:String,
        required:true,
    },
    date:{
        type: Date,
        required: true
    },
    image: []
});

//Export the model
module.exports = mongoose.model('Event', eventSchema);