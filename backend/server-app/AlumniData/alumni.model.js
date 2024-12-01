var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Alumni = new Schema({
    Aid : {type : Number},
    AUserName : {type : String, required:true, unique:true} ,
    AEmail : {type : String, unique : true},
    AUserPass : {type : String},
    AlumniName : {type : String},
    ADepartment : {type : String},
    AProgram : {type : String},
    AAdmissionYear : {type : Date},
    AGraduationYear : {type : Date},
    AAddress : {type : String},
    AContact : {type : Number},
    APicName : {type : String}
}, {
    collection : "Alumni"
});
module.exports = mongoose.model( "Alumni", Alumni);