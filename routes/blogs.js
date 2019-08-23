const express = require('express')
const router = express.Router()
const Blog = require('../models/Blog')


router.get('/', (req, res) => {
 res.send('we are blogs') 
})
//Specific Post
router.post('/', (req, res) => {
  console.log(req.body);
})

module.exports = router
