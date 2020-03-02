module.exports = (req, res, next) => {
    if (!req.session.user.isAdmin) {
        res.status(403).send('You are not allowed to execute this action')
    } else {
        return next()
    }
};