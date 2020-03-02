const users = require("../controllers/user/userController.js");
const userAuthMiddleware = require("../middleware/userAuthMiddleware");
const userLogin = require("../controllers/user/userLogin");
const userLogout = require("../controllers/user/userLogout");
const calculateurPoids = require("../controllers/pagePerso/calculateurPoids");
const adminAuthMiddleware = require("../middleware/adminAuthMiddleware");
module.exports = function (app) {
    //UTILISATEUR
    app.post("/user/create", users.create);
    app.post("/user/delete", userAuthMiddleware, adminAuthMiddleware, users.delete);
    app.get("/user/read", userAuthMiddleware, adminAuthMiddleware, users.read);
    app.post("/user/login", userLogin);
    app.get("/user/logout", userAuthMiddleware, userLogout);
    app.post("/user/toggleAdmin", userAuthMiddleware, adminAuthMiddleware, users.toggleAdmin);

    //CALCULATEURS
    app.post("/calculateur/poids", userAuthMiddleware, calculateurPoids.create);
};