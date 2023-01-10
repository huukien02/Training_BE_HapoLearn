const jwt = require('jsonwebtoken')
const Auth = (req, res, next) => {
    if (req.headers.authorization) {

        let token = req.headers.authorization

        let infor = jwt.verify(token, 'suyt');

        if (infor) {
            req.data = infor;
            return next()
        }
    }

    else {
        res.status(403).json({ message: 'Vui lòng Login' })
    }

};

module.exports = Auth;


