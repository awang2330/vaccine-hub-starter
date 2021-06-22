const express = require("express")
const router = express.Router()

router.use("/", (req, res, next) => {
  res.json()
})

router.use("/", (req, res, next) => {
  res.json()
})

module.exports = router