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

// Mongoose Connecting yo my data base
const mongoose = require('mongoose');

//Making the connectiuon with the database
main().catch(err => console.log(err));

async function main() {
    //Connecting to  mongodb database i created
    await mongoose.connect('mongodb+srv://123:<123>@cluster0.rhqvnnf.mongodb.net/?retryWrites=true&w=majority');
    // Username :123 pass:123
}

//Format which all the data will be in
//Converting to string
const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    cover: String
});

//model to interact with databse
const bookModel = mongoose.model('AllBooks', bookSchema);

//Use nodemon to avoid needing to stop node server to update changes

//using all api generated code
//putting the data into embeedded body
app.post('/api/books', (req, res) => {
    console.log(req.body);

    //writing the data to the page
    bookModel.create({
        title: req.body.title,
        cover: req.body.cover,
        author: req.body.author
    })
    res.send('Data Recieved');
})

//HTTP is handled by req & res
app.get('/api/books', (req, res) => {

    //To interact to database
    bookModel.find((error, data) => {
        res.json(data);
    })
})

//Passinf the ID to URL
// ' : ' is to say it is a variable
app.get('/api/book/:id', (req, res) => {
    console.log(req.params.id);

    bookModel.findById(req.params.id, (error, data) => {
        res.json(data);
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})