const db = require("../../config/db.config.js");
const CalculateurPoids = db.Calculateur;

//CREATE
exports.create = (req, res) => {

    CalculateurPoids.create({
        poids: req.body.poids,
        tauxDeGraisse: req.body.tauxDeGraisse,
        multiplicateurActivite: req.body.multiplicateurActivite,
        surplusPriseMasse: req.body.surplusPriseMasse,
        deficiteSeche: req.body.deficiteSeche,
        UserId: req.session.user.id
    }).then(monPoids => {
        console.log(req.session.user.id)
        res.send(monPoids);
    })

};