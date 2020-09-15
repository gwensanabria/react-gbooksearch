const router = require('express').Router()
const booksController = require('../../controllers/booksController')
const db = require('../../models')

// '/api/books'
router.route('/')
.get(booksController.findAll)
.post(booksController.create)

// '/api/bppks/:id'
router.route('/:id')
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove)

module.exports = router