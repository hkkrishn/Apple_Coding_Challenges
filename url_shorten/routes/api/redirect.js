//bring in express
const express = require('express');
const router = express.Router();

//Testing the API endpoint
router.get('/test', (req, res) => res.json({ msg: 'API IS WORKING' }))

//make a get request to api/redirect
//this will accept headers and redirects users

router.get('/', (req, res) => {
    const hash = req.headers.hash;
    URL.findOne({ _id: hash })
        .then((doc) => {
            return res.json({ url: doc.url })
        })
        .catch((err) => {
            return res.status(400).json({ error: `This link was not found` })
        })
});

module.exports = router;