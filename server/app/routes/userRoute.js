const users = require("../controllers/user/userController.js");
const userAuthMiddleware = require("../middleware/userAuthMiddleware");
const userLogin = require("../controllers/user/userLogin");
const aliment = require("../controllers/alimentController.js");
const compte = require("../controllers/compteController.js");
const userLogout = require("../controllers/user/userLogout");

module.exports = function (app) {
    app.post("/user/create", userAuthMiddleware, users.create);
    app.get("/user/delete", userAuthMiddleware, users.delete);
    app.get("/user/read", userAuthMiddleware, users.read);
    app.post("/user/login", userLogin);
    app.get("/user/logout", userLogout);

    app.post("/compte", compte.create);
    app.get("/compte", compte.create);

    app.post("/aliment", aliment.create);
    app.get("/aliment", aliment.create);
};