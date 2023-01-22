import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';

// * means more notes in google doc

// putting new express application inside app variable
const app  = express(); 
dotenv.config();



// ---MIDDLE WARE---
// support parsing of application/json type post data
app.use(bodyParser.json({limit: "30mb", extended: true}));

// setting up the parser so it can properly send a request
// support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

// enables express to accepts preflight requests * 
app.use(cors());




// temporary port we will connect on
const PORT = process.env.PORT || 5000;


// using express middle ware set up starting path for all routes
app.use('/users',userRoutes);

// this function will return a promise and this is the reason wny we need a then and catch
mongoose.connect(process.env.CONNECTION_URL)
    .then(( ) => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));