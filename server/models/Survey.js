let mongoose = require('mongoose');

let surveySchema = new mongoose.Schema({
    name: String,
    fav_lang: String,
    dojo: String
}, {timestamps: true, collection: 'surveys'});

mongoose.model('Survey', surveySchema);