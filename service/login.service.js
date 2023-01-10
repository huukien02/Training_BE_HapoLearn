const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken')


const login = async (req, res, next) => {

    try {
        const checkUser = await userModel.find({ username: req.body.username, password: req.body.password })

        if (checkUser.length > 0) {

            let infor = {
                id: checkUser[0]._id,
                username: checkUser[0].username,
                email: checkUser[0].email
            }

            let token = jwt.sign(infor, 'suyt');

            return res.status(200).json({
                message: 'Login thành công',
                token: token
            })
        }

        else {
            return res.status(400).json('Tài khoản hoặc mật khẩu không chính xác')
        }
    }
    catch (error) {
        return res.status(400).json(error)
    }
}
module.exports = { login }