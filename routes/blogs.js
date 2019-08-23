const express = require('express')
const router = express.Router()
const Blog = require('../models/Blog')


router.get('/', async (req, res) => {
  try {
    const getBlog = await Blog.find()
    res.json(getBlog)
  } catch (error) {
    res.json({
      message: err
    })
  }
})

//Specific Post
router.post('/', async (req, res) => {
  rqBod = req.body
  const blog = new Blog({
    title: rqBod.title,
    desc: rqBod.desc
  })

  try {
    const saveBlog = await blog.save()
    res.json(saveBlog)
  } catch (error) {
    res.json({ 
      message: err
    })
  }
})

// Specific Post

router.get('/:blogId', async (req, res) => {
  const blogId = req.params.blogId
  try {
    const blog = await Blog.findById(blogId)
    res.json(blog)
  } catch {
    res.json({ message: err })
  }
  
})


// Delete Post
router.delete('/:blogId', async (req, res) => {
  try{
    const removeBlog = Blog.remove({__id: req.params.blogId })
    res.json(removeBlog)
  } catch {
    res.json({ message: err})
  }
})
// Update
router.patch('/:blogId', async (req, res) => {
  try{
    const updateBlog = Blog.updateOne(
      {__id: req.params.blogId },
      {$set: {
        title: req.params.title,
      }}
      )
    res.json(updateBlog)
  } catch {
    res.json({ message: err})
  }
})


module.exports = router
