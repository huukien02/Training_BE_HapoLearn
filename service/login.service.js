const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken')


const login = async (req, res, next) => {

    try {
        const checkUser = await userModel.findOne({ username: req.body.username, password: req.body.password })

        if (checkUser != null) {
            const idUser = checkUser._id
            const username = checkUser.username
            const email = checkUser.email

            let infor = {
                id: idUser,
                username: username,
                email: email
            }
            const accessToken = jwt.sign(infor, 'suyt', {
                expiresIn: '30d',
            });

            return res.status(200).json({
                message: 'Login thành công',
                accessToken: accessToken
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




