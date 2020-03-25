const db = require("../../config/db.config.js");
const ResultatMaintenance = db.resultatMaintenance;

//CREATE

exports.create = (req, res) => {
    console.log("ca passe ResultatMaintenance");
    ResultatMaintenance.create({
            maintenanceCalc: req.body.maintenanceCalc,
            priseDeMasseCalc: req.body.priseDeMasseCalc,
            objectiSecheCalc: req.body.objectiSecheCalc,
            CalculateurId: req.body.idTrouve
        })
        .then(resultatMaint => {
            res.send(resultatMaint);
        }).catch(error => {
            res.send(error);
        })

};