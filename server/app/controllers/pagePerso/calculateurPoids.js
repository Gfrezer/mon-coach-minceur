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
        UserId: req.session.user.id,

    }).then(monCalculateur => {
        //const user = await db.User.findByPk(req.session.user.id)
        //monCalculateur.setUser(user);
        res.send(monCalculateur);
    })
};

exports.read = async (req, res) => {
    const user = await db.User.findByPk(req.session.user.id)
    const calcs = await user.getCalculateurs()
    const calc = calcs[0]
    const maintenance = await calc.getResultatMaintenance()
    console.log(maintenance),
        res.send(maintenance)

}