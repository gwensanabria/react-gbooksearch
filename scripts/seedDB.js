const mongoose = require('mongoose')
// const db = require('../models')

monggose.connect(
    process.env.MONGOD_URI || "mongod://localhost/googlebooks"
)