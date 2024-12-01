const express = require('express');
const alumniRoute = express.Router();
const bodyparser = require("body-parser");
const Alumni = require("./alumni.model");
var fs = require("fs");
const multer = require("multer");

// alumni registration code
alumniRoute.route('/register').post( (req,res)=>{
    var alumni = new Alumni(req.body);
    alumni.save().then( alumni=>{
        if(alumni!=null){
            res.send("Registratin Successful !!");
            res.end();
        } else{
            res.send("Registration Failed..")
            res.end();
        }
    }).catch( (err)=>{
        res.status(400).send("Registration Failed..");
    });
});

//get alumni count for id
alumniRoute.route('/getmaxaid').get( function(req,res){
    Alumni.find().then( alumni=>{
        console.log(alumni);
        res.send(alumni);
        res.end();
    }).catch( err=>{
        res.status(400).send("Data Not Found.. Something Went Wrong!");
    });
});

// login
alumniRoute.route('/login').post((req, res) => {
    var id = req.body.AlumniId;
    var pass = req.body.AlumniPass;

    Alumni.findOne({ $and: [{ "Aid": id }, { "AUserPass": pass }] })
        .then(alumni => {
            if (alumni) {
                res.send(alumni);
            } else {
                res.status(404).send("Invalid User ID or Password.");
            }
            res.end();
        })
        .catch(err => {
            res.status(500).send("Something went wrong: " + err.message);
            res.end();
        });
});

// get image
alumniRoute.route('/getimage/:apicname').get((req, res) => {
    const imagePath = "/Users/Khushi Verma/Documents/semesterProject/demo/backend/server-app/AlumniData/AlumniImages/" + req.params.apicname;
    res.sendFile(imagePath, (err) => {
        if (err) {
            res.status(404).send("Image not found");
        }
    });
});

// image save
const st = multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, "/Users/Khushi Verma/Documents/semesterProject/demo/backend/server-app/AlumniData/AlumniImages/")
    },
    filename : (req, file, cb)=>{
        cb(null, file.originalname)
    },
});
const upload = multer({storage:st});

alumniRoute.route('/savealumniimage').post(upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    res.json({ message: 'File uploaded successfully!' });
    // alert("File uploaded successfully!")
    res.send("File uploaded successfully!");
});

// get alumni for count
alumniRoute.route('/getalumnicount').get( (req,res)=>{
    Alumni.find().then( alumni=>{
        res.send(alumni);
        res.end();
    }).catch( err=>{
        res.send("Something went wrong..");
        res.end();
    });
});

// // get alumni details by aid
// customerRoute.route('/getcustomerdetails/:cid').get( (req, res)=>{
//     var id = req.params.cid;
//     Customer.findOne({"Cid":id}).then( customer=>{
//         console.log(customer);
//         res.send(customer);
//         res.end();
//     }).catch( err=>{
//         res.send("Something went wrong..");
//         res.end();
//     });
// });

// get alumni list
alumniRoute.route('/getalumnilist').get( (req, res)=>{
    var id = req.params.aid;
    Alumni.find().then( alumni=>{
        console.log(alumni);
        res.send(alumni);
        res.end();
    }).catch( err=>{
        res.send("Something went wrong..");
        res.end();
    });
});

module.exports = alumniRoute;