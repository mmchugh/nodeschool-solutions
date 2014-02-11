var fs = require('fs')
var path = require('path')


module.exports = function (directory, extension, callback) {

    fs.readdir(directory, function(err, files) {
        if (err)
            return callback(err)

        var filtered_files = []
        files.forEach(function(file) {
            if(path.extname(file) == '.' + extension)
                filtered_files.push(file)
        })

        callback(null, filtered_files)
    })
}
