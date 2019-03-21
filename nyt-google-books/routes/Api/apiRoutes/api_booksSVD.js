

const router = require("express").Router;
const controller = require("../../../contoller/controller");



router.route("/save")
    .post(controller.saveArticle)


router.route("/delete")
    .delete(controller.deleteArticle)

router.route("/getAll")
    .get(controller)




    module.exports= router