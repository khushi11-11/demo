var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Department = new Schema({
    deptid : {type:Number},
    deptname : {type:String}
}, {
    collection : 'Department'
});

module.exports = mongoose.model("Department", Department);