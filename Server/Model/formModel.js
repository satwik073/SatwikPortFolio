const mongoose = require('mongoose')
const formSchemaModel = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
       
    },
    userEmail: {
        type: String,
        required: true,
        unique : true
    },
    Message: {
        type: String,
    }
})

const userDetailsFilledInForm = mongoose.model('formSubmmittedData', formSchemaModel)
module.exports =userDetailsFilledInForm