//require express 
const express = require('express');
//require mongoose for mongodb database
const mongoose =require('mongoose');
// const bodyParser=require('body-parser');
const productRoutes = require('./routes/product');
//define a port to listen
const port = 4000;
const app = express();

//getting the database connection from config file
const db= require('./config/mongoose');

//reading through the post request
app.use(express.json());
//middleware for routes
app.use('/products',productRoutes);
//make the app listen to server on port 4000
app.listen(port, function(err)
{
    if(err)
    {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});