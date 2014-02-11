var http = require('http')
var url = require('url')

function parseTime(time) {
    return {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    }
}

function handler(request, response) {
    var urlParsed = url.parse(request.url, true)
    var queryTime = new Date(urlParsed.query.iso)

    if (urlParsed.pathname == '/api/parsetime') {
        response.end(JSON.stringify(parseTime(queryTime)))
    }
    else if (urlParsed.pathname == '/api/unixtime') {
        response.end(JSON.stringify({"unixtime": queryTime.getTime()}))
    }
}

server = http.createServer(handler)

server.listen(process.argv[2])
