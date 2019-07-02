const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

// sets res headers so browser allows cross-site requests form js script
app.use(cors());
app.use(express.json());

app.use("/", homepage);

app.listen(port, () => console.log(`server started on ${port}`));

