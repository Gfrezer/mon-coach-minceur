module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: '0'
    },

  }, {});
  User.associate = function (models) {

    User.hasOne(models.Calculateur);
  };
  return User;
};