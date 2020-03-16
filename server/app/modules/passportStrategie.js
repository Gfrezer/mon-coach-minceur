const db = require("../config/db.config.js");
const User = db.User;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcrypt');



module.exports = new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
  },

  (username, password, done) => {

    console.log("local strategie");


    User.findOne({
      where: {
        email: username,
      }

    }).then(user => {

      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          done(null, user);
        } else {
          done(null, false, {
            message: "Incorrect username or password"
          });
        }
      });

    });
  }
);