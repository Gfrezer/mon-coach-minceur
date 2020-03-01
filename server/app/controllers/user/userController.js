const db = require("../../config/db.config.js");
const User = db.User;

//CREATE
exports.create = (req, res) => {

    User.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,
        isadmin: req.body.isAdmin

    }).then(monuser => {
        res.send(monuser);
    })

};

//DELETE
exports.delete = (req, res) => {

    User.destroy({

        where: {
            id: req.body.id,
        }
    }).then(monuser => {
        res.send({
            delete: "ok"
        });
    })

};
//LIRE AFFICHER
exports.read = (req, res) => {
    User.findAll().then(monuser => {
        res.send(monuser);
    })

};

//ISADMIN OU PAS
exports.toggleAdmin = (req, res) => {

    User.update({
        isAdmin: req.body.isAdmin
    }, {
        where: {
            id: req.body.id
        }

    }).then(monuser => {
        User.findOne({
            where: {
                id: req.body.id
            }
        }).then(monuser => {
            res.send(monuser);
        })
    })

};