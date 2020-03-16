const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const hbs = require("hbs");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportStrategie = require("./app/modules/passportStrategie");
const bcrypt = require('bcrypt');

const app = express();
// COOKIESESSION
app.use(cookieSession({
    name: 'mysession',
    keys: ['vueauthrandomkey'],
    maxAge: 12 * 60 * 60 * 1000 // 24 hours
}))
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
//PASSPORT 
app.use(passport.initialize());
app.use(passport.session());

passport.use(passportStrategie);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    db.User.findOne({
        where: {
            id: id
        }
    }).then((user) => {
        done(null, user);
    });
});

//HBS
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '/app/views'));
//app.use(express.static(path.join(__dirname, '../client/dist')));

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
//APP
require("./app/routes/userRoute.js")(app);





//SEQUELIZE
const db = require('./app/config/db.config.js');
// force: true will drop the table if it already exists
db.sequelize.sync({
    alter: true
}).then(() => {
    console.log('mise à jour de la base effectuée { alter: true }');

    //ECOUTE SUR LE PORT:3200
    const port = process.env.PORT || 3200;
    app.listen(port);
    console.log("L'api coachminceur tourne sur le port : " + port);
});