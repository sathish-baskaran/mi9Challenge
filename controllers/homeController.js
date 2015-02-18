(function (homeController) {
    
    var data = require("../data");
    
    homeController.init = function (app) {
        
        //SB: Call and load data from node server, this is same as calling web service from .net framework
        app.get('/', function (req, res) {
            
            data.getPayload(function (err, results) {
                res.render("index" , { title : 'Mi9.Coding', error : err, loads : results });
            });

        });
    }

})(module.exports);