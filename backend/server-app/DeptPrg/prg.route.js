const express = require('express');
const prgRoute = express.Router();
var Program = require("./prg.model");
var deptRoute = require("./dept.route");


//save Program
prgRoute.route("/save").post( (req,res)=>{
    let program = new Program(req.body);
    program.save().then( program=>{
        res.send("Program saved..");
        res.end();
    }).catch( err=>{
        res.send("Unable to save data into the database..");
        res.end();
    });
});

//search by program id
prgRoute.route("/searchprogram/:prgid").get((req, res) => {
    Program.findOne({ "prgid": req.params.prgid }).then(program => {
            if (program) {
                res.send(program);
            } else {
                res.send("No such Program found.");
            }
        }).catch((err) => {
            res.send("Error occurred: " + err);
        });
});

//get program by department id
prgRoute.route("/getprogrambydeptid/:deptid").get( (req,res)=>{
    Program.find({"deptid":req.params.deptid}).then( (program)=>{
        res.send(program);
        res.end();
    }).catch( (err)=>{
        res.send(err);
        res.end();
    });
})

//update
prgRoute.route("/editprogram/").put( (req,res)=>{
    var program = new Program(req.body);
    Program.findOne({"prgid":program.prgid}, {"prgname":program.prgname}).then( program=>{
        Program.updateOne({"prgid":req.body.prgid}, {"prgname":req.body.prgname}).then( program=>{
            res.send("Program Updated Successfully..");
            res.end();
        }).catch( (err)=>{
            res.send(err);
            res.end()
        });
    }).catch((err)=>{
        res.send("No such Program found !!");
        res.end();
    })
});

//delete
prgRoute.route("/deleteprg/:prgid").delete( (req,res)=>{
    Program.deleteOne({"prgid":req.params.prgid}).then(program=>{
        if(program.deletedCount>0){
            res.send("Program Deleted Successfully ..");
            res.end();
        } else{
            res.send("No such Program found... No data has been deleted !");
            res.end();
        }
    })
});

//show all Programs - useEffect
prgRoute.route("/show").get( (req,res)=>{
    Program.find().then( (program)=>{
        res.send(program);
        res.end();
    }).catch( (err)=>{
        res.send(err);
        res.end();
    });
});

//show all Department - useEffect
deptRoute.route("/show").get( (req,res)=>{
    Department.find().then( (department)=>{
        res.send(department);
        res.end();
    }).catch( (err)=>{
        res.send(err);
        res.end();
    });
});

module.exports = prgRoute;