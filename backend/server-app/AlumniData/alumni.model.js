var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Alumni = new Schema({
    AUserName : {type : String},
    AEmail : {type : String},
    AUserPass : {type : String},
    AlumniName : {type : String},
    ADepartment : {type : String},
    AProgram : {type : String},
    AAdmissionYear : {type : Date},
    AGraduationYear : {type : Date},
    AAddress : {type : String},
    AContact : {type : Number},
    APicName : {type : String},
    Aid : {type : Number}
}, {
    collection : "Alumni"
});
module.exports = mongoose.model( "Alumni", Alumni);