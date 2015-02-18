
//SB: initialize controllers here along with default or any specific method.

(function (controllers) {
    
    
    try {

        var homeContr = require("./homeController");
        
        controllers.init = function (app) {
            homeContr.init(app);
        };
    }
     catch (error) {
        controllers.init = function (app) {
            app.render("../views/error_template" , { title : 'Sorry, Page not found', error : error });
        };

    }

})(module.exports);