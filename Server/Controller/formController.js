const userDetailsFilledInForm = require("../Model/formModel");


const postFormData = async (req, res) => {
    try {
        const { userName, userEmail, Message } = req.body;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!userName || !userEmail) {
            return res.status(400).json("Missing User name or email")
        }
        else if (!Message) {
            return res.status(400).json("Minimum 10 Characters Required")
        }
        else if (!emailRegex.test(userEmail)) {
            return res.status(400).json("Invalid Email Format")
        }
        const newFormData = new userDetailsFilledInForm({ userName, userEmail, Message })
        await newFormData.save();
        return res.status(200).json({
            success: true,
            formData : newFormData
        })

    }
    catch(error) {
        return res.status(400).json("Something Went wrong")
    }
}
module.exports = postFormData