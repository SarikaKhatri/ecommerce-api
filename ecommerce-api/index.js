//require express 
const express = require('express');
//require mongoose for mongodb database
const mongoose =require('mongoose');
//define a port to listen
const port = 4000;
const app = express();

//getting the database connection from config file
const db= require('./config/mongoose');
//make the app listen to server on port 4000
app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});