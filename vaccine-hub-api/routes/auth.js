const express = require("express")
const User = require('../models/user')
const router = express.Router()

router.use("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body)
    res.json({user})
  } catch(err) {
    console.log(err)
    next(err)
  }
})

router.use("/register", async (req, res, next) => {
  try {
    const user = await User.register(req.body)
    res.status(201).json({user})
  } catch(err) {
    console.log(err)
    next(err)
  }
})

module.exports = router