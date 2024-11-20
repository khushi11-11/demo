const express = require('express');
const deptRoute = express.Router();
const Department = require("./dept.model");

//save department
// deptRoute.route("/save").post( (req,res)=>{
//     let department = new Department(req.body);
//     department.save().then( department=>{
//         res.send("Department saved..");
//         res.end();
//     }).catch( err=>{
//         res.send("Unable to save data into the database..");
//         res.end();
//     });
// });
deptRoute.route('/save').post((req, res) => {
    let department = new Department(req.body);
    department.save().then((department) => {
        res.send('Department saved..');
        res.end();
    }).catch((err) => {
        res.status(500).send('Unable to save data into the database..');
        res.end();
    });
});
  

//search
deptRoute.route("/searchdepartment/:deptid").get((req, res) => {
    Department.findOne({ "deptid": req.params.deptid }).then(department => {
            if (department) {
                res.send(department);
            } else {
                res.send("No such Department found.");
            }
        }).catch((err) => {
            res.send("Error occurred: " + err);
        });
});

//update
deptRoute.route("/editdepartment/").put( (req,res)=>{
    var department = new Department(req.body);
    Department.findOne({"deptid":department.deptid}, {"deptname":department.deptname}).then( department=>{
        Department.updateOne({"deptid":req.body.deptid}, {"deptname":req.body.deptname}).then( department=>{
            res.send("Department Updated Successfully..");
            res.end();
        }).catch( (err)=>{
            res.send(err);
            res.end()
        });
    }).catch((err)=>{
        res.send("No such Department found !!");
        res.end();
    })
});

//delete
deptRoute.route("/deletedepartment/:deptid").delete( (req,res)=>{
    Department.deleteOne({"deptid":req.params.deptid}).then(department=>{
        if(department.deletedCount>0){
            res.send("Department Deleted Successfully ..");
            res.end();
        } else{
            res.send("No such Department found... No data has been deleted !");
            res.end();
        }
    })
})

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

module.exports = deptRoute;