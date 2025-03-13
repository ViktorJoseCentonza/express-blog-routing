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
    //works but sends 2 responses if slug is found throwing an error
    // posts_data.forEach((element, index, array) => {
    //     if (element.slug == postSlug) {
    //         console.log(`sent element with slug: ${postSlug}`);
    //         res.json(element)
    //         return
    //     } else if (index == array.length - 1) {
    //         console.log(`could not resolve element with slug: ${postSlug}`);
    //         res.send(`post with slug: ${postSlug} could not be found`)
    //     }
    // })
    for (let i = 0; i < posts_data.length; i++) {
        if (posts_data[i].slug == postSlug) {
            console.log(`sent post with slug: ${postSlug}`);
            res.json(posts_data[i])
            break
        } else if (i == posts_data.length - 1) {
            console.log(`could not resolve post with slug: ${postSlug}`);
            res.send(`post with slug: ${postSlug} could not be found`)
        }
    }
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