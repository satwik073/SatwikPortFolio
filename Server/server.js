const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const dotenv = require('dotenv');
const app = express();

app.use(cors()); 

dotenv.config({path:"./.env"})
mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
const FormDataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },

});

const FormData = mongoose.model('FormData', FormDataSchema);

app.use(bodyParser.json());

app.post('/api/submit-form', async (req, res) => {
  try {
    const { firstName, email, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format.' });
    }

    const newFormData = new FormData({
      firstName,
      email,
      message,
    });
    await newFormData.save();
    res.status(200).json({ message: 'Form data saved successfully!' });
  } catch (error) {
    console.error('Error saving form data:', error);
    res.status(500).json({ error: 'An error occurred while saving form data.' });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
