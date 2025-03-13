const express = require('express')
const router = express.Router();
const posts_data = require('../public/posts_data')

//index
router.get('/', (req, res) => {
    res.json(posts_data)
})
//show
router.get('/:slug', (req, res) => {
    const postSlug = req.params.slug

    //need to check if element.slug is equal to postSlug and return that element if true, else return slug not found
    res.json(posts_data)
})
//store
router.post('/:slug', (req, res) => {
    const postSlug = req.params.slug
    res.send(`add a new post with slug: ${postSlug}`)
})
//update
router.put('/:slug', (req, res) => {
    const postSlug = req.params.slug
    res.send(`update post with slug: ${postSlug}`)
})
//partial update
router.patch('/:slug', (req, res) => {
    const postSlug = req.params.slug
    res.send(`modify post with slug: ${postSlug}`)
})
//delete
router.delete('/:slug', (req, res) => {
    const postSlug = req.params.slug
    res.send(`delete post with slug: ${postSlug}`)
})

module.exports = router;