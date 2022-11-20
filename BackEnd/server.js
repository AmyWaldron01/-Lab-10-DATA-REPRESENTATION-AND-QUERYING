//npm install body-parser
//npm install express
//npm install cors

//Importing Express
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000 //Port

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// avoid a CORS error
const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    //Connecting to  mongodb database i created
    await mongoose.connect('mongodb+srv://123:123@cluster0.rhqvnnf.mongodb.net/?retryWrites=true&w=majority');
}

//Format which all the data will be in
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    cover: String
});

const bookModel = mongoose.model('AllBooks', bookSchema);

//Use nodemon to avoid needing to stop node server to update changes

//using all api generated code
app.post('/api/books', (req, res) => {
    console.log(req.body);

    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
    res.send('Data Recieved');
})

app.get('/api/books', (req, res) => {
    bookModel.find((error, data) => {
        res.json(data);
    })
})

app.get('/api/book/:id', (req, res) => {
    console.log(req.params.id);

    bookModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})