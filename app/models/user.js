module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,

  }, {});


  User.associate = function (models) {
    User.hasOne(models.Compte);
    User.hasOne(models.Aliment);

  };
  return User;
};