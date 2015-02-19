
//SB: loading this is .js file on node server for initial setup as per package.json


var http = require('http');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var express = require('express');
var app = express();

//var controllers = require("./controllers");

//SB: assign vash engine for view
app.set("view engine", "vash");


//SB: call homecontroller
//controllers.init(app);

var data = require("./data");
var jq = require('jquery');
  
  

app.get('/', function (req, res) {

    data.getPayload(function (err, results) {
        
    var asData = jq(results).filter(function (i, n) { return n.drm == true && n.episodeCount > 0 });
        
      res.render("index" , { title : 'Mi9.Coding', error : err, loads : JSON.stringify(asData) });


    });

   
});

//SB: create server instance to handle from client side
http.createServer(app).listen(server_port, server_ip_address);
