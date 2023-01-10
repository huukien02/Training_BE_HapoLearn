const coursesModel = require('../models/courses.model');


/* Get All Courses */
const getCourses = async (req, res, next) => {
    try {
        const data = await coursesModel.find({})
        return res.status(200).json(data)
    }
    catch (err) {
        return res.status(400).json(err);
    }
}


module.exports = { getCourses }