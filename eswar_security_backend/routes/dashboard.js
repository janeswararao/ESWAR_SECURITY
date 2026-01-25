const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

/* DASHBOARD API */
router.get("/", authMiddleware, (req, res) => {
  res.json({
    msg: "Welcome to Dashboard",
    userId: req.userId,
  });
});

/* TOOLS API */
router.get("/tools", authMiddleware, (req, res) => {
  res.json({
    tools: [
      "Vulnerability Scanner",
      "Password Analyzer",
      "Log Monitor",
      "Firewall Checker",
    ],
  });
});

module.exports = router;
