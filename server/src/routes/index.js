const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/token", require("./token"));
router.use("/auth", require("./auth"));
router.use("/blogs", require("./blogs"));
router.use("/categories", require("./categories"));
router.use("/comments", require("./comments"));

module.exports = router;
