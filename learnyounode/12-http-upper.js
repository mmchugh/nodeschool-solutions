var http = require('http')
var through2 = require('through2-map')

function handler(request, response) {
    request.pipe(through2(function(chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(response)
}

server = http.createServer(handler)

server.listen(process.argv[2])
