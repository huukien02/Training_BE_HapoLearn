const coursesModel = require('../models/courses.model');
const joinCoursesModel = require('../models/joinCourses.model');


/* Join Courses */
const joinCourses = async (req, res, next) => {
    try {
        const searchCourses = await coursesModel.find({ _id: req.body.idCourses })
        const nameCourses = searchCourses[0].name;
        const imgCourses = searchCourses[0].img;

        const checkJoinCourses = await joinCoursesModel.find({ username: req.data.username, nameCourses: nameCourses })

        if (Object.keys(checkJoinCourses).length != 0) {
            return res.status(202).json("Bạn đã tham gia khóa học này")
        }
        else {
            const item = new joinCoursesModel({
                username: req.data.username,
                nameCourses: nameCourses,
                imgCourses: imgCourses,
                idCourses: req.body.idCourses
            })
            item.save()
            return res.status(200).json("Tham gia khóa học thành công")
        }
    }
    catch (err) {
        return res.status(400).json(err);
    }


}

/* Get By Name */
const getByName = async (req, res, next) => {
    try {
        const username = req.data.username;
        const docs = await joinCoursesModel.find({ username: username })
        res.status(200).json(docs)

    } catch (err) {
        return res.status(400).json(err);
    }
}

/* Check Join Courses */
const checkJoinCourses = async (req, res, next) => {
    try {
        const username = req.data.username;
        const idCourses = req.params.id;
        const docs = await joinCoursesModel.find({ username: username, idCourses: idCourses })

        return res.status(200).json(docs)

    } catch (err) {
        return res.status(400).json(err);
    }
}

module.exports = { joinCourses, getByName, checkJoinCourses }