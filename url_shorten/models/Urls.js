const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define a new schema for database

const UrlSchema = new Schema({
        _id: { type: String },
        url: {
            type: String,
            required: true,
        },
        hash: {
            type: String,
        },
        date: {
            type: Date,
            default: Date.now
        }
    })
    //We are defining what we want;


module.exports = URL = mongoose.model('URL', UrlSchema); //export our schema