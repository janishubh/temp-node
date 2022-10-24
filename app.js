const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("welcome to my page")
    } if (req.url === '/about') {
        res.end("this  is about page")

    } else {
        res.end("oops we cannot find the page you are lookong for!")
    }
})

server.listen(5000)