let mongoose = require('mongoose');
let Survey = mongoose.model('Survey');

module.exports = {
    index: function(req, res){
        res.render('index');
    },
    create: function(req, res){
        let newSurvey = {
            name: req.body.name,
            fav_lang: req.body.fav_lang,
            dojo: req.body.dojo
        };

        Survey.create(newSurvey)
            .then(data => res.redirect('/results'))
            .catch(err => {
                console.log(err);
                res.redirect('/results')
            })
    },
    results: function(req, res){
        Survey.find()
            .then(surveys => res.render('results', {surveys: surveys}))
            .catch(err => res.redirect('/'));
    }
}