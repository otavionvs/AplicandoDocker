const express = require("express");
const router = express.Router();

const Users = require("./Users/user.controller");

router.use("/Users", Users);

module.exports = router;