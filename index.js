'use strict';

var express = require('express');
var path    = require('path');
var port    = process.env.PORT || 8080;
var app     = express();

    app.engine('.html', require('ejs').renderFile);

    app.use(express.static(__dirname +  '/app'));
    app.use('/vendor', express.static(__dirname + '/bower_components'));

    app.get('/*', function(req, res) {
        res.render(__dirname + '/app/index.html');
    });

    app.listen(port, function () {
        console.log('Started on port %d', port);
    });
