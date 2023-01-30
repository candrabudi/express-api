const express =  require('express')
const app = express()
const port = 8000
const postRouter = require('./routes/posts');

const bodyParser = require('body-parser')

const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/posts', postRouter);

app.listen(port, () => {
    console.log(`app running at http:localhost:${port}`)
})