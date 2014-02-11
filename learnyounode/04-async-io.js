var fs = require('fs')

function lineCounter(err, data) {
    if (err) { return }
    console.log(data.split('\n').length - 1)
}

fs.readFile(process.argv[2], 'utf8', lineCounter)
