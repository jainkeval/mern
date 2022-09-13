const express = require('express')
const connectDB = require('./config/db')
const app = express()


const booksRouter = require('./routes/api/books')

// DB connection
connectDB()

app.use(express.urlencoded({ extended: false }))

app.use('/books', booksRouter)
app.get('/', (req, res) => res.send('Y'))

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on port ${port}`))