const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var postSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true,
    }, 
    // image: {
    //     type: String,
    //     required: false,
    // },


});

//Export the model
module.exports = mongoose.model('Post', postSchema);