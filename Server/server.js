const express = require('express');
const submissionRoute =require('./Routes/formSubmissionRoute')
const bodyParser = require('body-parser');
const cors = require('cors'); 
const dotenv = require('dotenv');
const connectDB = require('./Config/dataBase');
const app = express();
app.use(bodyParser.json())
app.use(cors()); 

dotenv.config({path:"./.env"})

const PORT = process.env.PORT || 9054;
app.use('/v1/portfolio',submissionRoute )
app.listen(PORT, () => {
  connectDB()
  console.log(`Server running on port ${PORT}`);
});
