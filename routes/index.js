const express = require("express");
const router = express.Router();

router.get("./routes", (req, res) => {
  res.send("ROUTER");
});

module.exports = router;
