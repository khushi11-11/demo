var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Feedback = new Schema({
    emailid : {type:String},
    aid : {type:Number},
    message : {type:String}
}, {
    collection : 'Feedback'
});

module.exports = mongoose.model("Feedback", Feedback);