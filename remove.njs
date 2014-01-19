var readline = require('readline');

function remove (filePath, field, value) {
	var rd = readline.createInterface({
	    input: fs.createReadStream('/path/to/file'),
	    output: process.stdout,
	    terminal: false
	});

	rd.on('line', function(line) {
	    console.log(line);
	});	
}

