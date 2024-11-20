//express mongodb ka connection
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var PORT = 7777;

//baaki files ka connection (database, route, model via route)
const config = require("./DB");
const alumniRoute = require("./AlumniData/alumni.route");
const deptRoute = require("./DeptPrg/dept.route");
const prgRoute = require("./DeptPrg/prg.route");


app.use(express.json());
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

//files|modules
app.use("/alumni", alumniRoute);
app.use("/department", deptRoute);
app.use("/program", prgRoute);

//setting up database connection
mongoose.connect(config.URL, {useNewUrlParser:true}).then( ()=>{
    console.log("Database connected.." + config.URL);
}, err=>{
    console.log("Cannot connect to the database " + err);
})

//for server-side browser
app.get("/", (req, res)=>{
    res.send("server is running");
    res.end();
})

//for the port
app.listen(PORT, ()=>{
    console.log("Server is Running on Port " + PORT);
})