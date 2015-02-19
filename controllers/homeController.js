(function (homeController) {
    
    var data = require("../data");
    
    var jq = require('jquery');
    
    homeController.init = function (app) {
        
        //SB: Call and load data from node server, this is same as calling web service from .net framework
        app.get('/', function (req, res) {
        
            
            data.getPayload(function (err, results) {
                
                 var asData = jq(results).filter(function (i, n) { return n.drm == true && n.episodeCount > 0 });
                
                 // res.setHeader('Content-Type', 'application/json');
                 res.json(JSON.stringify(asData));
                  
                res.render("index" , { title : 'Mi9.Coding', error : err, loads : results });
            });

        });
    }

})(module.exports);