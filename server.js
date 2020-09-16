const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const dotenv = require('dotenv')
require('./connect');

//environment variables
require('dotenv').config();

const PORT = process.env.PORT || 8000
const app = express()

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'))
// }

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname + '/client/build/index.html'));
    });
  }

// API routes
app.use(routes)

// mogodb
mongoose.connect(process.env.MONGOD_URI || 'mongod://localhost/googlebooks', { useNewUrlParser: true })

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}`)
})