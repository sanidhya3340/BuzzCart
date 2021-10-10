const express = require('express')
const router = express.Router();

const {
  register,
  login,
  forgotpassword,
  resetpassword,
} = require("../controller/auth");

// router.route("/register").post(register);
// router.route("/login").post(login);
// router.route("/forgotpassword").post(forgotpassword);
// router.route("/resetpassword/:resetToken").post(resetpassword);

router.post("/register", register);
router.post("/login", login);
router.post("/forgotpassword", forgotpassword);
router.put("/passwordreset/:resetToken",resetpassword);



module.exports = router;