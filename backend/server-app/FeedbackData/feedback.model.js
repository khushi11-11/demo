var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Feedback = new Schema({
    emailid : {type:String},
    afeedback_id : {type:Number},
    message : {type:String}
}, {
    collection : 'Feedback'
});

module.exports = mongoose.model("Feedback", Feedback);