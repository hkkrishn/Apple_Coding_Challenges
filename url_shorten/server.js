//Tech Stack used
//Node, React,Javascript HTML,CSS.MongoDB for the backend and UniqID to create a unique id via a hash function

const express = require('express') // Initializes express middleware for us
const app = express();

//the path that we want to listen to
//GET request
app.get('/', (req, res) => {
    res.send('Hello Apple')
})

//Since this project might me deployed live it can either use the process.env port or port 9000
const port = process.env.PORT || 9000
app.listen(port, () => console.log(`Server is running on port ${port}`));