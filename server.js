const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


require('./server/config/mongoose');
require('./server/config/routes')(app);



app.listen(8008, () => {
    console.log('Mongoose Mod on port 8008');
})