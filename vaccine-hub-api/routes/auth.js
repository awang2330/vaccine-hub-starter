const express = require("express")
const router = express.Router()

router.use("/login", async (req, res, next) => {
  try {
    res.json()
  } catch(err) {
    console.log(err)
    next(err)
  }
})

router.use("/register", async (req, res, next) => {
  try {
    res.json()
  } catch(err) {
    console.log(err)
    next(err)
  }
})

module.exports = router