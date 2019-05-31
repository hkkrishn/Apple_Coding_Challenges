const express = require('express');
const router = express.Router();
const unique = require('uniqid');

//Load our URL Models/Schema
const URL = require('../../models/Urls');

//Enable Cross Origin
router.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept")
    next();
})

//Testing the API endpoint
router.get('/test', (req, res) => res.json({ msg: 'API IS WORKING' }))

//POST request to post an url to shorten
router.post('/', (req, res) => {
    //confirm if request was received
    console.log(req.body);
    if (req.body.url) {
        urlData = req.body.url
    }
    console.log(`URL given is ${urlData}`)
        //Conduct check if URL already exists in Database
    URL.findOne({ url: urlData }, (err, doc) => {
        if (doc) {
            //if url exists
            console.log(`Url found in our database`)
        } else {
            console.log(`New URL Entry detected`)
            const webaddress = new URL({
                _id: unique(),
                url: urlData,
            });
            webaddress.save((err) => {
                if (err) {
                    return console.error(err);
                }
                res.send({
                    url: urlData,
                    hash: webaddress._id,
                    status: 200,
                    statusTxt: `OK`
                })
            })
        }
    })
});


module.exports = router;