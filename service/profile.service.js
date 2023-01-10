const userModel = require('../models/user.model');

const updateProfile = (req, res, next) => {
    try {
        userModel.updateOne({ _id: req.data.id }, {
            name: req.body.name,
            email: req.body.email,
            date: req.body.date,
            phone: req.body.phone,
            address: req.body.address,
            about: req.body.about,
        },
            err => {
                if (err) throw err;
                return res.status(200).json("Edit thanh cong")
            })
    }
    catch (error) {
        return res.status(400).json(error)
    }
}

module.exports = { updateProfile }