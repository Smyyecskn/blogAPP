"use strict";

const router = require("express").Router();

const comments = require("../controllers/comments");

//URL:/commentss
router.route("/").get(comments.list).post(comments.create);
router
  .route("/:id")
  .get(comments.read)
  .put(comments.update)
  .patch(comments.update)
  .delete(comments.delete);

module.exports = router;
