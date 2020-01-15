const db = require("../config/db.config.js");
const User = db.User;
const Compte = db.Compte

module.exports = async (req, res) => {
    const user = await User.findOne({
        where: {
            nom: "hamonic"
        }
    });
    const compte = await Compte.findOne({
        where: {
            password: "azerty"
        }
    });
    await user.setCompte(compte);
    console.log((await user.getCompte()).password);

    res.json("test")
}