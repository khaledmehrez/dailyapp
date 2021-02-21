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
app.use(bodyParser.urlencoded({
    extended: true
  }));
/*import routes*/
// //import from route
const todoRoute = require('./routes/todoRoutes');
const home = require('./routes/Home');
// middelware

app.use('/todo', todoRoute);
app.use('/', home)

mongoose.connect("mongodb+srv://kaled:dailyapp@cluster0.s5o3n.mongodb.net/dbDailyapp?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("connected to db")
})
//listen
app.listen('5000')



