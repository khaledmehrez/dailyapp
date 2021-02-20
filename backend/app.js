const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();


const path = require('path');
//add cors
app.use(cors());
//parse json file
app.use(bodyParser.json());
/*import routes*/
//import from route

// middelware




mongoose.connect("mongodb+srv://kaled:dailyapp@cluster0.s5o3n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db")
})
//listen
app.listen('5000')



