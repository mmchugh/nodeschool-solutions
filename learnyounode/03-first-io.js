var fs = require('fs')

fileBuffer = fs.readFileSync(process.argv[2])
lines = fileBuffer.toString().split('\n')

console.log(lines.length - 1)
