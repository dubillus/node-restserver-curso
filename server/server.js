require('./config/config');

const express = require('express')
const mongoose = require('mongoose');
const app = express()
const bodyParser = require('body-parser')

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))

// create application/json parser
app.use(bodyParser.json())


app.use(require('./routes/usuario'))

mongoose.connect('mongodb://localhost:27017/cafe', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
})