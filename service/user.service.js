const userModel = require('../models/user.model');

/* Get User By Id */
const getUser = async (req, res, next) => {
    try {
        const docs = await userModel.find({ _id: req.data.id })
        return res.status(200).json(docs)

    }
    catch (error) {
        return res.status(400).json(error)
    }
}
module.exports = { getUser }