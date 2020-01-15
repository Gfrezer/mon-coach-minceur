const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");






const app = express();

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

    //ECOUTE SUR LE PORT:2503
    const port = process.env.PORT || 3000;
    app.listen(port);
    console.log("L'api coachminceur tourne sur le port : " + port);
});