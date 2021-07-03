const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 4000;
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./DB.js')
const personsRoute = require('./persons.route')

mongoose.Promise = global.Promise
mongoose.connect(config.DB, {useNewUrlParser: true})
.then(
    () => {console.log('Database is connected')},
    err => {console.log('Cannot connect to database ' + err)}
)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.use('/persons', personsRoute)

app.listen(PORT, function() {
    console.log('Server is running on port: ', PORT)
})