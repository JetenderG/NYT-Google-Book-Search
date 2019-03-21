const router = require("express").Router;
const bookF = require("./api_booksSVD");



router.use("/books", bookF);






module.exports = router;