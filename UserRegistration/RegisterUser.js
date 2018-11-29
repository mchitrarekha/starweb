const express = require("express");
var cors = require('cors')
const app = express()

const bodyParser =  require('body-parser');

app.use(cors())
app.use(bodyParser.json())

const mongoose = require("mongoose");
const url = 'mongodb://localhost:27017/userregistration'
const assert = require('assert');

mongoose.connect(url, { useNewUrlParser: true }, () =>  {
    console.log('database connected - userregistration');
});

require("./UserModel");

const UserModel = mongoose.model('UserSchemaModel')

app.get('/', (req, res) => {
    res.send("This is the user registration service");
});

app.post("/registration", (req, res) => {

    var newUser = {
        name: req.body.name,
        email: req.body.email,
        address: req.body.address
    }
    var usermodel = new UserModel(newUser);
    console.log(req.body);
    usermodel.save().then(() => {
         console.log("New User Created")
     }).catch((err) => {
         if(err){
             throw err;
         }
     })
   res.send(" A new User Is Created")
})
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(8999, () => {
    console.log('up and running -- this is our service');
})