require('dotenv').config();


const mongoose = require('mongoose')
const url = process.env.MONGODB_URI
const connectDB = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connect Mongodb success");
    })
    .catch((err) => {
        throw err;
    });

module.exports = connectDB