var express = require('express');
var app = express();
var path = require('path');

// __dirname will use the current path from where you run this file 
app.use(express.static(__dirname));
//app.use(express.static(path.join(__dirname, 'C:\\users\\leon\\dropbox\\secretgeek\\all_someday_projects\\git_playground\\til_live')));

app.listen(8000);
console.log('Listening on port 8000');
