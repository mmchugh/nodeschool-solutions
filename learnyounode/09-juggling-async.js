var http = require('http')

var collectedData = []

var completed = 0;

function printAll() {
    if (++completed < 3)
        return
    for (var i=0; i<3; i++) {
        console.log(collectedData[i])
    }
}

function getOne(index) {
    http.get(process.argv[index + 2], function (response) {
        response.setEncoding('utf8')
        response.on("data", function (data) {
            collectedData[index] += data
        })
        response.on("end", printAll)
    })
}
for (var i=0; i<3; i++) {
    collectedData[i] = ""
    getOne(i)
}
