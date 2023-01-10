const userModel = require('../models/user.model');


const signup = async (req, res, next) => {
    try {
        const checkUser = await userModel.find({ username: req.body.username })

        if (checkUser.length == 0) {
            const accout = new userModel({
                username: req.body.username,
                password: req.body.password,
                email: req.body.email,
                name: '',
                phone: '',
                date: '',
                address: '',
                about: ''
            })
            await accout.save()
            return res.status(200).json("Đăng kí thành công")

        }
        if (checkUser.length > 0) {
            res.status(400).json('Tài khoản đã tồn tại')
        }
    }
    catch (error) {
        res.status(400).json(error)
    }


}
module.exports = { signup }