var os = require('os');
var fs = require('fs');
var path = require('path');
var readline = require('readline');
var admzip = require('adm-zip');
var csv = require('csv');
var zip = new admzip('./20131119.zip');

//generate random string for file path to extract zip, make dir, extract zip
var tempFolder = os.tmpdir() + path.sep + Math.random().toString(36).substring(7);
fs.mkdirSync(tempFolder);
zip.extractAllTo(/*target path*/tempFolder, /*overwrite*/true);
console.log(tempFolder);

//see https://npmjs.org/package/csv

rawRoutes = csv
.from.string(
  '#Welcome\n"1","2","3","4"\n"a","b","c","d"',
  {comment: '#'} )
.to.array( function(data){
  console.log(data)
} );

//var routes =

function processTable(tableArray) = {
	//pop the first row and turn it into a columns object
	//then send the rest as the array object
	//should look like
	// { columns: [a, b, c],
	//   data: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]}
}
 
//cleanup
//fs.rmdirSync(tempFolder);
