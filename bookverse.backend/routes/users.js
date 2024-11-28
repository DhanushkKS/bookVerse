const express = require("express");
const {
  loginUser,
  registerUser,
  signOutUser,
} = require("../controllers/userController");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/signIn", loginUser);
//register
router.post("/register", registerUser);

//signOut
router.put("/signOut", signOutUser);

module.exports = router;
