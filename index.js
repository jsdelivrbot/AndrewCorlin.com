var express = require('express')
var path = require('path')
var PORT = process.env.PORT || 5000
var cors = require('cors');
var mongodb = require('mongodb');

var app = express();
// app.use(express.static('public'));
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/muiscript', express.static(__dirname + '/node_modules/material-components-web/dist/'));
app.use('/muistyle', express.static(__dirname + '/node_modules/material-components-web/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/views/about-me.html'));
});

app.get('/template.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/views/template.html'));
});

app.get('/contact-me.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/views/contact-me.html'));
});

app.get('/about-me.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/views/about-me.html'));
});

app.get('/education.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/views/education.html'));
});

app.get('/projects.html', function(request, response) {
	response.sendFile(path.join(__dirname + '/public/views/projects.html'));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
