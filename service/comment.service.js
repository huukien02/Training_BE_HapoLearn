const commentModel = require('../models/comment.model');


/* GET by ID. */
const getById = async (req, res, next) => {
    try {
        const docs = await commentModel.find({ idCourses: req.params.id })
        return res.status(200).json(docs)
    }
    catch (err) {
        return res.status(400).json(err);
    }
}


/* POST comments. */
const createComment = async (req, res, next) => {

    const username = req.data.username;
    const idUser = req.data.id
    const idCourses = req.body.id

    try {
        const checkComment = await commentModel.find({ user: username, idCourses: idCourses })

        if (checkComment.length > 0) {
            return res.status(400).json("Chỉ review 1 lần")
        }
        else {
            const item = new commentModel({
                user: username,
                idUser: idUser,
                idCourses: req.body.id,
                cmt: req.body.cmt,
                today: req.body.today,
                star: req.body.star
            })
            item.save()
            return res.status(200).json("Review thành công")
        }
    } catch (err) {
        return res.status(400).json(err);
    }
}


/* Delete comment */
const deleteComment = async (req, res, next) => {
    try {

        await commentModel.deleteOne({ _id: req.params.id })
        return res.status(200).json("Đã xóa review")

    } catch (err) {
        return res.status(400).json(err);
    }
}


/* Update comment */
const updateComment = async (req, res, next) => {
    try {
        await commentModel.updateOne({ _id: req.body.idEdit },
            {
                cmt: req.body.cmtEdit,
                star: req.body.starEdit,
                today: req.body.today
            })
        res.status(200).json("Update thành công")

    } catch (err) {
        return res.status(400).json(err);
    }



}


module.exports = { getById, createComment, deleteComment, updateComment }