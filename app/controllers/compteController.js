const db = require("../config/db.config.js");
const Compte = db.Compte;

exports.create = (req, res) => {
    Compte.create({
        pseudo: "frezer",
        password: "azerty",
        adress: "21 rue des accacias",
        telephone: "02544566598",

    }).then(compte => {
        res.json(compte);
    })

};