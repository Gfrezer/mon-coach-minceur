const db = require("../../config/db.config.js");
const User = db.User;

//CREATE
exports.create = (req, res) => {

    User.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        password: req.body.password,

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
    }).then((monuser) => {
        res.send(monuser);
    })

};

exports.read = (req, res) => {
    User.findAll().then(users => {
        res.json(users)
    })

};