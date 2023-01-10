const userModel = require('../models/user.model');

const reserPass = async (req, res, next) => {

    try {
        const check = await userModel.find({ email: req.body.email })

        if (check.length > 0) {

            await userModel.updateOne({ email: req.body.email }, { password: '2002' })
            return res.status(200).json("2002")
        }
        else if (check.length == 0) {
            return res.status(400).json("Email error")
        }
    }
    catch (error) {
        return res.status(400).json(error)
    }

}
module.exports = { reserPass }