// import express and run 
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

require('dotenv/config');



/**
 * Routes
 * 1st : get request at localhost:3000/
 * 2nd : import routes
 */ 
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req,res) =>{
    res.send('lets go baby');
})

const postsRoute = require('./routes/posts')
app.use('/posts', postsRoute)

/**
 * Connect to DB
 * process.env.DB_CONNECTION = the database url from mongo db containing user/password 
 */
mongoose.connect(
        process.env.DB_CONNECTION,
        { useNewUrlParser: true}, 
        ()=> console.log('Connected succesfully')
    );

// app listener : port 3000
app.listen(3000)
