//Tech Stack used
//Node, React,Javascript HTML,CSS.MongoDB for the backend and UniqID to create a unique id via a hash function

const express = require('express') // Initializes express middleware for us
const mongoose = require('mongoose'); //initialize mongoose to connect to MongoDB
const bodyParser = require('body-parser'); //Bring int he body parser middleware

// //Load in the URL Model
// const URL = require('./models/Urls');


const app = express(); //Initialize the app
//Intialize the body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
    //the key-value pairs returned by the middleware can only be of type String or Array.
    //When extended is true they can be any type.
app.use(bodyParser.json());
//ready to accept form data


//Database keys
const db = require('./config/keys').mongoURI;
//connect to MongoDB database
mongoose.connect(db)
    .then(() => console.log('MongoDB has been connected'))
    .catch(err => console.log(`There was an Error: ${err}`))


//Route Management
const shorten = require('./routes/api/shorten');
//if the user makes a request
app.use('/api/shorten', shorten)

//the path that we want to listen to
//GET request
app.get('/', (req, res) => {
    res.send('Apple Coding Challenge')
})



//Since this project might me deployed live it can either use the process.env port or port 9000
const port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server is running on port ${port}`));