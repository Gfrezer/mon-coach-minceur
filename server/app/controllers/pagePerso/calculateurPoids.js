const db = require("../../config/db.config.js");
const CalculateurPoids = db.Calculateur;

//CREATE
exports.create = (req, res) => {

    CalculateurPoids.create({
        poids: req.body.poids,
        tauxDeGraisse: req.body.tauxDeGraisse,
        multiplicateurActivite: req.body.multiplicateurActivite,
        maintenance: req.body.maintenance,
        surplusPriseMasse: req.body.surplusPriseMasse,
        deficiteSeche: req.body.deficiteSeche,
        objectifPriseMasse: req.body.objectifPriseMasse,
        objectifSeche: req.body.objectifSeche
    }).then(monPoids => {
        res.send(monPoids);
    })

};