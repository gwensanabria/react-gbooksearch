const express = require('express')
const mongoose = require('mongoose')
// const routes = require('')

const PORT = process.env.PORT || 8000
const app = express()

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app/use(express.static('client/build'))
}

// API routes
// app.use(routes)

// mogodb
mongoose.connect(process.env.MONGOD_URI || 'mongod://localhost/googlebooks', { useNewUrlParser: true })

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}`)
})