const db = require("../config/db.config.js");
const User = db.User;

exports.create = (req, res) => {
    User.create({
        nom: "hamonic",
        prenom: "gael",
        email: "azee@gttr.gt",

    }).then(user => {
        res.json(user);
    })

};