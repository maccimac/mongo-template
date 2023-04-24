
const express = require('express');
const carRoutes = require('./routes/cars')
const mongoose = require('mongoose')
const cors = require('cors');
//express app 

const app = express();

//Middlewares
app.use(express.json()); //parses the http request's body/data to the 'req' object like body-parser
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method); //Middleware for logging the requests to console our server
    next()                              //This middle ware will run everytime before getting to the requested route coz of 'next' function
})

app.use('/api/cars', carRoutes);

//connect to db
mongoose.connect("mongodb+srv://dbUserDeep:Bakingit7*@cluster0.gzzew.gcp.mongodb.net/test")
    .then(() => {
        //listern for requests only after connection
        app.listen(5000, () => {
            console.log("Connected to DB Listening on port", process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error);
    })

