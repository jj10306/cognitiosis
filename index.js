const express = require('express');
const mongoose = require('mongoose');

//'mini apps' using express.Router() for modularity and independence of middleware
const homepage = require('./routes/server/homepage')

const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db,
        { useNewUrlParser: true } )
    .then(() => console.log('\nmongo connected....'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res, next) {
    // Handle the get for this route
});

app.post('/', function(req, res, next) {
    debugger;
});

// app.use("/", homepage);

app.listen(port, () => console.log(`server started on ${port}`));

