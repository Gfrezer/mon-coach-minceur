const db = require("../../config/db.config.js");
const User = db.User;
const bcrypt = require("bcrypt");
//CREATE
exports.create = (req, res) => {
    bcrypt.hash(req.body.password, 10).then(function (hash) {
        console.log("je passe dedans!!!!!!!!!")
        User.create({
            nom: req.body.nom,
            prenom: req.body.prenom,
            email: req.body.email,
            password: hash,
            isadmin: req.body.isAdmin

        }).then(monuser => {
            console.log(monuser)
            res.send(monuser);
        })



    }).catch(function (error) {
        console.log("ca foire")
    });
}
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