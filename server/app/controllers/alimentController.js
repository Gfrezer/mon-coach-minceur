const db = require("../config/db.config.js");
const Aliment = db.Aliment;

exports.create = (req, res) => {
    Aliment.create({
        nom: "carotte",
        glucides: "20",
        lipides: "50",
        proteines: "30",
        calories: "12"

    }).then(aliment => {
        res.json(aliment);
    })
};