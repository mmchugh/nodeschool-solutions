var http = require('http')

var collectedData = String()

http.get(process.argv[2], function (response) {
    response.setEncoding('utf8')
    response.on("data", function (data) {
        collectedData += data
    })
    response.on("end", function () {
        console.log(collectedData.length)
        console.log(collectedData)
    })
})
