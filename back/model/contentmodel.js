var mongoose = require('mongoose');

var contentSchema = new mongoose.Schema({
    content:{
        type: String
    },
    // course_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "course"
    // },
    language: {
        type: String
    },
    course_fee: {
        type: Number,
    }
    
})

module.exports = mongoose.model('content', contentSchema);