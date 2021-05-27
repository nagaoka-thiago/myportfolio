const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8081

app.use(express.static('images'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'))
})

app.listen(port, () => {
    console.log('Server running successfully!')
})