const db = require("../config/db.config.js");
const User = db.User;
const LocalStrategy = require("passport-local").Strategy;

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password"
  },

  (username, password, done) => {
    console.log("local strategie");

    User.findOne({
      where: {
        email: username,
        password: password
      }
    }).then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false, {
          message: "Incorrect username or password"
        });
      }
    });
  }
);
