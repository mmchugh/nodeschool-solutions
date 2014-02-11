var fs = require('fs')
var path = require('path')

var filterext = "." + process.argv[3]

function filter(err, list) {
    if (err) { return }
    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == filterext)
            console.log(list[i])
    }
}

fs.readdir(process.argv[2], filter)
