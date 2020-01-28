module.exports = function (app) {

    const users = require("../controllers/userController.js")
    app.post("/user/create", users.create);
    app.get("/user/delete", users.delete);
    app.get("/user", users.read);

    const compte = require("../controllers/compteController.js")
    app.post("/compte", compte.create);
    app.get("/compte", compte.create);

    const aliment = require("../controllers/alimentController.js")
    app.post("/aliment", aliment.create);
    app.get("/aliment", aliment.create);




}