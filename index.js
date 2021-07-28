
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var router = require("./admin-api-routes"); 
var router2 = require("./user-api-routes");
var express = require("express");
var app = express();

app.use(bodyParser.urlencoded({

    extended: true
    
}));

app.use(router);
app.use(router2);

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/ecom");

var database = mongoose.connection

if(database)
{
    console.log("Database Connected");
}
else
{
    console.log("Database Not Connected");
}

var server = app.listen(9999, function() {

    console.log("Server Started");

})