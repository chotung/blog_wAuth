const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
 res.send('we are blogs') 
})
//Specific Post
router.get('/', (req, res) => {
 res.send('we are blogs') 
})

module.exports = router
