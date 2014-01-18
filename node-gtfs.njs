var os = require('os');
var fs = require('fs');
var path = require('path');
var admzip = require('adm-zip');
var zip = new admzip('./20131119.zip');

//generate random string for file path to extract zip, make dir, extract zip
var tempFolder = os.tmpdir() + path.sep + Math.random().toString(36).substring(7);
fs.mkdirSync(tempFolder);
zip.extractAllTo(/*target path*/tempFolder, /*overwrite*/true);
console.log(tempFolder);

//cleanup
//fs.rmdirSync(tempFolder);