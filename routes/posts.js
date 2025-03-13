const express = require('express')
const router = express.Router();
const posts_data = require('../public/posts_data')

//index
router.get('/', (req, res) => {
    res.json(posts_data)
})
//show
router.get('/:id', (req, res) => {
    const postId = req.params.id
    res.send(`return post with id: ${postId}`)
})
//store
router.post('/:id', (req, res) => {
    const postId = req.params.id
    res.send(`add a new post with id: ${postId}`)
})
//update
router.put('/:id', (req, res) => {
    const postId = req.params.id
    res.send(`update post with id: ${postId}`)
})
//partial update
router.patch('/:id', (req, res) => {
    const postId = req.params.id
    res.send(`modify post with id: ${postId}`)
})
//delete
router.delete('/:id', (req, res) => {
    const postId = req.params.id
    res.send(`delete post with id: ${postId}`)
})

module.exports = router;