const express = require('express')
const router  = express.Router()

const Book = require('../../models/Book')

router.get('/test', (req,res) => res.send('Books'))

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(404).json({ nobooksfound: 'No books found'}))
})

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: `No book found with id ${req.params.id}.::\n ${err}`}))
})

router.post('/', (req, res) => {
    Book.create(req.body)
        .then(book => res.json({ msg: 'Book successfully added'}))
        .catch(err => res.status(400).json({ error: `Unable to add this book ::\n ${err}`}))
})

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate((req.params.id, req.body))
    .then(book => res.json({ msg: 'Book updated successfully'}))
    .catch(err => res.status(400).json({ error: `Unable to update this book ::\n ${err}`}))
})

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove((req.params.is, req.body))
    .then(book => res.json({ msg: `Book with id ${req.params.id} deleted successfully`}))
    .catch(err => res.status(404).json({ error: 'Unable to delete this book'}))
})

module.exports = router