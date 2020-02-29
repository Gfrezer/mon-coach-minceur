const passport = require("passport")

module.exports = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }

        if (!user) {
            return res.status(401).send([user, "Cannot log in", info]);
        }

        req.login(user, err => {
            req.session.user = user;
            res.json(user);

        });
    })(req, res, next);
};