const mongoose = require('mongoose')
const config = require('config')


const db = config.get('mongoURI')

const connectDB = async () => {
    await mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Mongooooooshhhh")
}

module.exports = connectDB