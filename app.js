'use strict'

require('node-jsx').install(); // make `.jsx` file requirable by node
var express = require('express');
var engine = require('react-engine');
var async = require('async');
var moment = require('moment');
var _ = require('lodash');
var config = require('./config');

var app = express();

var engineOptions = {
  // optional if not using react-router
  // reactRoutes: 'PATH_TO_REACT_ROUTER_ROUTE_DECLARATION'
};

// set `react-engine` as the view engine
app.engine('.jsx', engine.server.create(engineOptions));

// set the view directory
app.set('views', __dirname + '/public/views');

// set js as the view engine
app.set('view engine', 'jsx');

// finally, set the custom react-engine view for express
app.set('view', engine.expressView);

//expose public folder as static assets
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res, next) {
  var title = 'React Starter App by Nikos Kampitakis'
  var data = {msg: 'Hello React People!'};
  res.render('index', {
    title: title,
    data: data
  });
});

var server = app.listen(process.env.PORT || config.port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('React starter app listening at http://%s:%s', host, port);
}).on("error", function(err){
    console.log("Error trying to claim port " + config.port);
    console.log(err);
});
