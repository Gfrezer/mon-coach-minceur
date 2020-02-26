const users = require("../controllers/user/userController.js");
const userAuthMiddleware = require("../middleware/userAuthMiddleware");
const userLogin = require("../controllers/user/userLogin");
const userLogout = require("../controllers/user/userLogout");
const calculateurPoids = require("../controllers/pagePerso/calculateurPoids");
module.exports = function (app) {

    //UTILISATEUR 
    app.post("/user/create", users.create);
    app.get("/user/delete", userAuthMiddleware, users.delete);
    app.get("/user/read", users.read);
    app.post("/user/login", userLogin);
    app.get("/user/logout", userLogout);


    //CALCULATEURS
    app.post("/calculateur/poids", calculateurPoids.create);





};