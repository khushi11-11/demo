const express = require('express');
const feedbackRoute = express.Router();
let Feedback = require("./feedback.model");

feedbackRoute.route('/feedbacksave').post( (req,res)=>{
    let feedback = new Feedback(req.body);

    feedback.save().then( bill=>{
        res.send("Feedback Sent Successfully.");
        res.end();
    }).catch( err=>{
        res.send(err);
        res.end();
    });
});

//get feedback count for id
feedbackRoute.route('/getmaxfid').get( function(req,res){
    Feedback.find().then( feedback=>{
        console.log(feedback);
        res.send(feedback);
        res.end();
    }).catch( err=>{
        res.status(400).send("Data Not Found.. Something Went Wrong!");
    });
});

// get feedback for count
feedbackRoute.route('/getfeedbackcount').get( (req,res)=>{
    Feedback.find().then( alumni=>{
        res.send(feedback);
        res.end();
    }).catch( err=>{
        res.send("Something went wrong..");
        res.end();
    });
});

feedbackRoute.route('/show').get( function(req,res){
    Feedback.find().then( feedback=>{
        // console.log(feedback);
        res.send(feedback);
        res.end();
    }).catch( err=>{
        res.status(400).send("Data Not Found.. Something Went Wrong!");
    });
});

module.exports = feedbackRoute;