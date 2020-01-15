module.exports = function (app) {

    const users = require("../controllers/userController.js")
    app.post("/", users.create);
    app.get("/", users.create);

    const compte = require("../controllers/compteController.js")
    app.post("/compte", compte.create);
    app.get("/compte", compte.create);





}