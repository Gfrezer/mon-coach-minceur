module.exports = (req, res, next) => {
  let user = req.session.user
  req.logout();
  req . session = null;
  console.log("logged out");

  res.send({});
};