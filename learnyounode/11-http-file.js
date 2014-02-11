var http = require('http')
var fs = require('fs')

function handleRequest(request, response) {
    fs.createReadStream(process.argv[3]).pipe(response)
}

server = http.createServer(function (request, response) {
    fs.createReadStream(process.argv[3]).pipe(response)
})

server.listen(process.argv[2])
