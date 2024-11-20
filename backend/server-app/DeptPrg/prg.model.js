var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Program = new Schema({
    prgid : {type:Number},
    prgname : {type:String},
    deptid : {type:Number}
}, {
    collection : 'Program'
});

module.exports = mongoose.model("Program", Program);