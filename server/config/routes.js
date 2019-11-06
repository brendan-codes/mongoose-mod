let surveys = require('./../controllers/surveys');


module.exports = function(app){
    app.get('/', surveys.index);
    app.post('/submit', surveys.create)
    app.get('/results', surveys.results)
}