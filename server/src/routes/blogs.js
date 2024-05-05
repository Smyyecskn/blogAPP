const router = require("express").Router();

const blogs = require("../controllers/blogs");
const permissions = require("../middlewares/permissions");

//URL:/blogss
router.route("/").get(blogs.list).post(permissions.isLogin, blogs.create);
router
  .route("/:id")
  .get(permissions.isLogin, blogs.read)
  .put(permissions.isLogin, blogs.update)
  .patch(permissions.isLogin, blogs.update)
  .delete(permissions.isAdmin, blogs.delete);

module.exports = router;
