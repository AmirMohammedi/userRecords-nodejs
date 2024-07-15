const express = require('express')
const router = express.Router()
const userController = require("../controllers/userController")

//GET request
router.get("/", userController.user_index_get);
router.get("/user/add.html", userController.user_add_get);
router.get("/user/view.html", userController.user_view_get);
router.get("/user/edit.html", userController.user_edit_get);
router.get("/view/:id", userController.user_viewbyid_get);
router.get("/edit/:id", userController.user_editbyid_get);

//POST request
router.post("/user/add.html", userController.user_add_post);
router.post("/search", userController.user_search_post);

//DELETE request
router.delete("/delete/:id", userController.user_delete);

//PUT request
router.put("/edit/:id", userController.user_put);

module.exports = router