require('dotenv').config();

const express = require('express');

const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const mongoURL = process.env.MONGODBLINK;

const app = express();

app.use(express.json());

mongoose.connect(mongoURL)
    .then((value) => {
        console.log("MongoDB is connected!");
        app.listen(port, () => {
            console.log("Server is running on port:", port);
        });
    })
    .catch((error) => {
        console.log(error);
    });