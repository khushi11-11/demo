var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Feedback = new Schema({
    feedback_id : {type:Number},
    emailid : {type:String},
    message : {type:String}
}, {
    collection : 'Feedback'
});

module.exports = mongoose.model("Feedback", Feedback);