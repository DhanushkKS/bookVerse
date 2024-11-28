const express = require("express");
const {
  loginUser,
  signUpUser,
  logOutUser,
} = require("../controllers/userController");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

//signup
router.post("/signUp", signUpUser);
//login
router.post("/logIn", loginUser);
//logout
router.put("/logOut", logOutUser);

module.exports = router;
