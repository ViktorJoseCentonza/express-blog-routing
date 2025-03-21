const express = require('express');
const app = express();
const postsRouter = require('./routes/posts');

const port = 3000;

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`)
})
//main
app.get('/', (req, res) => {
    res.send(`welcome to my server!`)
})

//middleware
app.use('/posts', postsRouter)
