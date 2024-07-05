const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URL
        mongoose.connect(url).then(() => {
            console.log("Connection successful")
        }).catch((err) => {
            console.log("Connection Failed : ", err)
        })
    }
    catch (err) {
        console.log("Something went wrong")
    }
}

module.exports = connectDB;