const express = require('express');
const userController = require("../controllers/users");
const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get("/", userController.prueba);

module.exports = router;
