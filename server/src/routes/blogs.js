const router = require("express").Router();

const blogs = require("../controllers/blogs");

//URL:/blogss
router.route("/").get(blogs.list).post(blogs.create);
router
  .route("/:id")
  .get(blogs.read)
  .put(blogs.update)
  .patch(blogs.update)
  .delete(blogs.delete);

module.exports = router;
