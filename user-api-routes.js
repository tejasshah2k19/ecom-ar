var router = require("express").Router();

var userController = require("./Controllers/userController");

router.route("/user").post(userController.insertUser);
router.route("/getuser").get(userController.getUser);
router.route("/deleteuser").delete(userController.deleteUser);
router.route("updateuser").put(userController.updateUser);

module.exports = router;