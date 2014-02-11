var filter = require('./modules/filter.js')

files = filter(process.argv[2], process.argv[3], function(err, data) {
    if (err)
        return

    for (var i = 0; i < data.length; i ++ ) {
        console.log(data[i])
    }
})
