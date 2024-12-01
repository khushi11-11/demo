var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Bill = new Schema({
    billid : {type : Number},
    billdate : {type : String},
    Aid : {type : String}
}, {
    collection : "Bill"
});

module.exports = mongoose.model("Bill", Bill);

